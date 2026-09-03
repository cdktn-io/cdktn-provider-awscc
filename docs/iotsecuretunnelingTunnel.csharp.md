# `iotsecuretunnelingTunnel` Submodule <a name="`iotsecuretunnelingTunnel` Submodule" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsecuretunnelingTunnel <a name="IotsecuretunnelingTunnel" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel awscc_iotsecuretunneling_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnel(Construct Scope, string Id, IotsecuretunnelingTunnelConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig">IotsecuretunnelingTunnelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig">IotsecuretunnelingTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig">PutDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig">PutTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDestinationConfig">ResetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTimeoutConfig">ResetTimeoutConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationConfig` <a name="PutDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig"></a>

```csharp
private void PutDestinationConfig(IotsecuretunnelingTunnelDestinationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags"></a>

```csharp
private void PutTags(IResolvable|IotsecuretunnelingTunnelTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]

---

##### `PutTimeoutConfig` <a name="PutTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig"></a>

```csharp
private void PutTimeoutConfig(IotsecuretunnelingTunnelTimeoutConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationConfig` <a name="ResetDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDestinationConfig"></a>

```csharp
private void ResetDestinationConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeoutConfig` <a name="ResetTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTimeoutConfig"></a>

```csharp
private void ResetTimeoutConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsecuretunnelingTunnel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsecuretunnelingTunnel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsecuretunnelingTunnel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsecuretunnelingTunnel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotsecuretunnelingTunnel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotsecuretunnelingTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotsecuretunnelingTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference">IotsecuretunnelingTunnelDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList">IotsecuretunnelingTunnelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference">IotsecuretunnelingTunnelTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelArn">TunnelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfigInput">DestinationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfigInput">TimeoutConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.description">Description</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationConfig`<sup>Required</sup> <a name="DestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfig"></a>

```csharp
public IotsecuretunnelingTunnelDestinationConfigOutputReference DestinationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference">IotsecuretunnelingTunnelDestinationConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tags"></a>

```csharp
public IotsecuretunnelingTunnelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList">IotsecuretunnelingTunnelTagsList</a>

---

##### `TimeoutConfig`<sup>Required</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfig"></a>

```csharp
public IotsecuretunnelingTunnelTimeoutConfigOutputReference TimeoutConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference">IotsecuretunnelingTunnelTimeoutConfigOutputReference</a>

---

##### `TunnelArn`<sup>Required</sup> <a name="TunnelArn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelArn"></a>

```csharp
public string TunnelArn { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationConfigInput`<sup>Optional</sup> <a name="DestinationConfigInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfigInput"></a>

```csharp
public IResolvable|IotsecuretunnelingTunnelDestinationConfig DestinationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tagsInput"></a>

```csharp
public IResolvable|IotsecuretunnelingTunnelTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]

---

##### `TimeoutConfigInput`<sup>Optional</sup> <a name="TimeoutConfigInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfigInput"></a>

```csharp
public IResolvable|IotsecuretunnelingTunnelTimeoutConfig TimeoutConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsecuretunnelingTunnelConfig <a name="IotsecuretunnelingTunnelConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    IotsecuretunnelingTunnelDestinationConfig DestinationConfig = null,
    IResolvable|IotsecuretunnelingTunnelTags[] Tags = null,
    IotsecuretunnelingTunnelTimeoutConfig TimeoutConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.description">Description</a></code> | <code>string</code> | A short text description of the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.destinationConfig">DestinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | The destination configuration for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]</code> | A collection of tag metadata. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | Timeout configuration for the tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A short text description of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#description IotsecuretunnelingTunnel#description}

---

##### `DestinationConfig`<sup>Optional</sup> <a name="DestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.destinationConfig"></a>

```csharp
public IotsecuretunnelingTunnelDestinationConfig DestinationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

The destination configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#destination_config IotsecuretunnelingTunnel#destination_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.tags"></a>

```csharp
public IResolvable|IotsecuretunnelingTunnelTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]

A collection of tag metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#tags IotsecuretunnelingTunnel#tags}

---

##### `TimeoutConfig`<sup>Optional</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.timeoutConfig"></a>

```csharp
public IotsecuretunnelingTunnelTimeoutConfig TimeoutConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

Timeout configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#timeout_config IotsecuretunnelingTunnel#timeout_config}

---

### IotsecuretunnelingTunnelDestinationConfig <a name="IotsecuretunnelingTunnelDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnelDestinationConfig {
    string[] Services = null,
    string ThingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.services">Services</a></code> | <code>string[]</code> | A list of service names that identify the target application. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.thingName">ThingName</a></code> | <code>string</code> | The name of the IoT thing to which you want to connect. |

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.services"></a>

```csharp
public string[] Services { get; set; }
```

- *Type:* string[]

A list of service names that identify the target application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#services IotsecuretunnelingTunnel#services}

---

##### `ThingName`<sup>Optional</sup> <a name="ThingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.thingName"></a>

```csharp
public string ThingName { get; set; }
```

- *Type:* string

The name of the IoT thing to which you want to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#thing_name IotsecuretunnelingTunnel#thing_name}

---

### IotsecuretunnelingTunnelTags <a name="IotsecuretunnelingTunnelTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#key IotsecuretunnelingTunnel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#value IotsecuretunnelingTunnel#value}

---

### IotsecuretunnelingTunnelTimeoutConfig <a name="IotsecuretunnelingTunnelTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnelTimeoutConfig {
    double MaxLifetimeTimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes">MaxLifetimeTimeoutMinutes</a></code> | <code>double</code> | The maximum amount of time (in minutes) a tunnel can remain open. |

---

##### `MaxLifetimeTimeoutMinutes`<sup>Optional</sup> <a name="MaxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes"></a>

```csharp
public double MaxLifetimeTimeoutMinutes { get; set; }
```

- *Type:* double

The maximum amount of time (in minutes) a tunnel can remain open.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#max_lifetime_timeout_minutes IotsecuretunnelingTunnel#max_lifetime_timeout_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotsecuretunnelingTunnelDestinationConfigOutputReference <a name="IotsecuretunnelingTunnelDestinationConfigOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnelDestinationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetThingName">ResetThingName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServices` <a name="ResetServices" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetServices"></a>

```csharp
private void ResetServices()
```

##### `ResetThingName` <a name="ResetThingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetThingName"></a>

```csharp
private void ResetThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.servicesInput">ServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingNameInput">ThingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.services">Services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName">ThingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.servicesInput"></a>

```csharp
public string[] ServicesInput { get; }
```

- *Type:* string[]

---

##### `ThingNameInput`<sup>Optional</sup> <a name="ThingNameInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingNameInput"></a>

```csharp
public string ThingNameInput { get; }
```

- *Type:* string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.services"></a>

```csharp
public string[] Services { get; }
```

- *Type:* string[]

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName"></a>

```csharp
public string ThingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsecuretunnelingTunnelDestinationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---


### IotsecuretunnelingTunnelTagsList <a name="IotsecuretunnelingTunnelTagsList" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get"></a>

```csharp
private IotsecuretunnelingTunnelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotsecuretunnelingTunnelTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]

---


### IotsecuretunnelingTunnelTagsOutputReference <a name="IotsecuretunnelingTunnelTagsOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsecuretunnelingTunnelTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>

---


### IotsecuretunnelingTunnelTimeoutConfigOutputReference <a name="IotsecuretunnelingTunnelTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsecuretunnelingTunnelTimeoutConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resetMaxLifetimeTimeoutMinutes">ResetMaxLifetimeTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxLifetimeTimeoutMinutes` <a name="ResetMaxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resetMaxLifetimeTimeoutMinutes"></a>

```csharp
private void ResetMaxLifetimeTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutesInput">MaxLifetimeTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes">MaxLifetimeTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxLifetimeTimeoutMinutesInput`<sup>Optional</sup> <a name="MaxLifetimeTimeoutMinutesInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutesInput"></a>

```csharp
public double MaxLifetimeTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `MaxLifetimeTimeoutMinutes`<sup>Required</sup> <a name="MaxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes"></a>

```csharp
public double MaxLifetimeTimeoutMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsecuretunnelingTunnelTimeoutConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---



