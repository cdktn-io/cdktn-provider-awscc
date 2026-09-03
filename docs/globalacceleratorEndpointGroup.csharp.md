# `globalacceleratorEndpointGroup` Submodule <a name="`globalacceleratorEndpointGroup` Submodule" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorEndpointGroup <a name="GlobalacceleratorEndpointGroup" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorEndpointGroup(Construct Scope, string Id, GlobalacceleratorEndpointGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig">GlobalacceleratorEndpointGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig">GlobalacceleratorEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations">PutEndpointConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides">PutPortOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfigurations">ResetEndpointConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds">ResetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort">ResetHealthCheckPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol">ResetHealthCheckProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverrides">ResetPortOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount">ResetThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage">ResetTrafficDialPercentage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointConfigurations` <a name="PutEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations"></a>

```csharp
private void PutEndpointConfigurations(IResolvable|GlobalacceleratorEndpointGroupEndpointConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>[]

---

##### `PutPortOverrides` <a name="PutPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides"></a>

```csharp
private void PutPortOverrides(IResolvable|GlobalacceleratorEndpointGroupPortOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>[]

---

##### `ResetEndpointConfigurations` <a name="ResetEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfigurations"></a>

```csharp
private void ResetEndpointConfigurations()
```

##### `ResetHealthCheckIntervalSeconds` <a name="ResetHealthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds"></a>

```csharp
private void ResetHealthCheckIntervalSeconds()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath"></a>

```csharp
private void ResetHealthCheckPath()
```

##### `ResetHealthCheckPort` <a name="ResetHealthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort"></a>

```csharp
private void ResetHealthCheckPort()
```

##### `ResetHealthCheckProtocol` <a name="ResetHealthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol"></a>

```csharp
private void ResetHealthCheckProtocol()
```

##### `ResetPortOverrides` <a name="ResetPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverrides"></a>

```csharp
private void ResetPortOverrides()
```

##### `ResetThresholdCount` <a name="ResetThresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount"></a>

```csharp
private void ResetThresholdCount()
```

##### `ResetTrafficDialPercentage` <a name="ResetTrafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage"></a>

```csharp
private void ResetTrafficDialPercentage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorEndpointGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorEndpointGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorEndpointGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorEndpointGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorEndpointGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurations">EndpointConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList">GlobalacceleratorEndpointGroupEndpointConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupArn">EndpointGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrides">PortOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList">GlobalacceleratorEndpointGroupPortOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationsInput">EndpointConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput">EndpointGroupRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput">HealthCheckIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput">HealthCheckPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput">HealthCheckProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput">ListenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverridesInput">PortOverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput">ThresholdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput">TrafficDialPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion">EndpointGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort">HealthCheckPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol">HealthCheckProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn">ListenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount">ThresholdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage">TrafficDialPercentage</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointConfigurations`<sup>Required</sup> <a name="EndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurations"></a>

```csharp
public GlobalacceleratorEndpointGroupEndpointConfigurationsList EndpointConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList">GlobalacceleratorEndpointGroupEndpointConfigurationsList</a>

---

##### `EndpointGroupArn`<sup>Required</sup> <a name="EndpointGroupArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupArn"></a>

```csharp
public string EndpointGroupArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PortOverrides`<sup>Required</sup> <a name="PortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrides"></a>

```csharp
public GlobalacceleratorEndpointGroupPortOverridesList PortOverrides { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList">GlobalacceleratorEndpointGroupPortOverridesList</a>

---

##### `EndpointConfigurationsInput`<sup>Optional</sup> <a name="EndpointConfigurationsInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationsInput"></a>

```csharp
public IResolvable|GlobalacceleratorEndpointGroupEndpointConfigurations[] EndpointConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>[]

---

##### `EndpointGroupRegionInput`<sup>Optional</sup> <a name="EndpointGroupRegionInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput"></a>

```csharp
public string EndpointGroupRegionInput { get; }
```

- *Type:* string

---

##### `HealthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="HealthCheckIntervalSecondsInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput"></a>

```csharp
public double HealthCheckIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput"></a>

```csharp
public string HealthCheckPathInput { get; }
```

- *Type:* string

---

##### `HealthCheckPortInput`<sup>Optional</sup> <a name="HealthCheckPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput"></a>

```csharp
public double HealthCheckPortInput { get; }
```

- *Type:* double

---

##### `HealthCheckProtocolInput`<sup>Optional</sup> <a name="HealthCheckProtocolInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput"></a>

```csharp
public string HealthCheckProtocolInput { get; }
```

- *Type:* string

---

##### `ListenerArnInput`<sup>Optional</sup> <a name="ListenerArnInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput"></a>

```csharp
public string ListenerArnInput { get; }
```

- *Type:* string

---

##### `PortOverridesInput`<sup>Optional</sup> <a name="PortOverridesInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverridesInput"></a>

```csharp
public IResolvable|GlobalacceleratorEndpointGroupPortOverrides[] PortOverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>[]

---

##### `ThresholdCountInput`<sup>Optional</sup> <a name="ThresholdCountInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput"></a>

```csharp
public double ThresholdCountInput { get; }
```

- *Type:* double

---

##### `TrafficDialPercentageInput`<sup>Optional</sup> <a name="TrafficDialPercentageInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput"></a>

```csharp
public double TrafficDialPercentageInput { get; }
```

- *Type:* double

---

##### `EndpointGroupRegion`<sup>Required</sup> <a name="EndpointGroupRegion" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```csharp
public string EndpointGroupRegion { get; }
```

- *Type:* string

---

##### `HealthCheckIntervalSeconds`<sup>Required</sup> <a name="HealthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```csharp
public double HealthCheckIntervalSeconds { get; }
```

- *Type:* double

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `HealthCheckPort`<sup>Required</sup> <a name="HealthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```csharp
public double HealthCheckPort { get; }
```

- *Type:* double

---

##### `HealthCheckProtocol`<sup>Required</sup> <a name="HealthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```csharp
public string HealthCheckProtocol { get; }
```

- *Type:* string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn"></a>

```csharp
public string ListenerArn { get; }
```

- *Type:* string

---

##### `ThresholdCount`<sup>Required</sup> <a name="ThresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```csharp
public double ThresholdCount { get; }
```

- *Type:* double

---

##### `TrafficDialPercentage`<sup>Required</sup> <a name="TrafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```csharp
public double TrafficDialPercentage { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorEndpointGroupConfig <a name="GlobalacceleratorEndpointGroupConfig" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorEndpointGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EndpointGroupRegion,
    string ListenerArn,
    IResolvable|GlobalacceleratorEndpointGroupEndpointConfigurations[] EndpointConfigurations = null,
    double HealthCheckIntervalSeconds = null,
    string HealthCheckPath = null,
    double HealthCheckPort = null,
    string HealthCheckProtocol = null,
    IResolvable|GlobalacceleratorEndpointGroupPortOverrides[] PortOverrides = null,
    double ThresholdCount = null,
    double TrafficDialPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion">EndpointGroupRegion</a></code> | <code>string</code> | The name of the AWS Region where the endpoint group is located. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn">ListenerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the listener. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfigurations">EndpointConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>[]</code> | The list of endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>double</code> | The time in seconds between each health check for an endpoint. Must be a value of 10 or 30. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort">HealthCheckPort</a></code> | <code>double</code> | The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol">HealthCheckProtocol</a></code> | <code>string</code> | The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverrides">PortOverrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#port_overrides GlobalacceleratorEndpointGroup#port_overrides}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount">ThresholdCount</a></code> | <code>double</code> | The number of consecutive health checks required to set the state of the endpoint to unhealthy. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage">TrafficDialPercentage</a></code> | <code>double</code> | The percentage of traffic to sent to an AWS Region. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointGroupRegion`<sup>Required</sup> <a name="EndpointGroupRegion" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion"></a>

```csharp
public string EndpointGroupRegion { get; set; }
```

- *Type:* string

The name of the AWS Region where the endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn"></a>

```csharp
public string ListenerArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}

---

##### `EndpointConfigurations`<sup>Optional</sup> <a name="EndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfigurations"></a>

```csharp
public IResolvable|GlobalacceleratorEndpointGroupEndpointConfigurations[] EndpointConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>[]

The list of endpoint objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_configurations GlobalacceleratorEndpointGroup#endpoint_configurations}

---

##### `HealthCheckIntervalSeconds`<sup>Optional</sup> <a name="HealthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds"></a>

```csharp
public double HealthCheckIntervalSeconds { get; set; }
```

- *Type:* double

The time in seconds between each health check for an endpoint. Must be a value of 10 or 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `HealthCheckPort`<sup>Optional</sup> <a name="HealthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort"></a>

```csharp
public double HealthCheckPort { get; set; }
```

- *Type:* double

The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}

---

##### `HealthCheckProtocol`<sup>Optional</sup> <a name="HealthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol"></a>

```csharp
public string HealthCheckProtocol { get; set; }
```

- *Type:* string

The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}

---

##### `PortOverrides`<sup>Optional</sup> <a name="PortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverrides"></a>

```csharp
public IResolvable|GlobalacceleratorEndpointGroupPortOverrides[] PortOverrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#port_overrides GlobalacceleratorEndpointGroup#port_overrides}.

---

##### `ThresholdCount`<sup>Optional</sup> <a name="ThresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount"></a>

```csharp
public double ThresholdCount { get; set; }
```

- *Type:* double

The number of consecutive health checks required to set the state of the endpoint to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}

---

##### `TrafficDialPercentage`<sup>Optional</sup> <a name="TrafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage"></a>

```csharp
public double TrafficDialPercentage { get; set; }
```

- *Type:* double

The percentage of traffic to sent to an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}

---

### GlobalacceleratorEndpointGroupEndpointConfigurations <a name="GlobalacceleratorEndpointGroupEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorEndpointGroupEndpointConfigurations {
    string AttachmentArn = null,
    bool|IResolvable ClientIpPreservationEnabled = null,
    string EndpointId = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.attachmentArn">AttachmentArn</a></code> | <code>string</code> | Attachment ARN that provides access control to the cross account endpoint. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.clientIpPreservationEnabled">ClientIpPreservationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | true if client ip should be preserved. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.endpointId">EndpointId</a></code> | <code>string</code> | Id of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.weight">Weight</a></code> | <code>double</code> | The weight for the endpoint. |

---

##### `AttachmentArn`<sup>Optional</sup> <a name="AttachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.attachmentArn"></a>

```csharp
public string AttachmentArn { get; set; }
```

- *Type:* string

Attachment ARN that provides access control to the cross account endpoint.

Not required for resources hosted in the same account as the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#attachment_arn GlobalacceleratorEndpointGroup#attachment_arn}

---

##### `ClientIpPreservationEnabled`<sup>Optional</sup> <a name="ClientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.clientIpPreservationEnabled"></a>

```csharp
public bool|IResolvable ClientIpPreservationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

true if client ip should be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}

---

##### `EndpointId`<sup>Optional</sup> <a name="EndpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Id of the endpoint.

For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The weight for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}

---

### GlobalacceleratorEndpointGroupPortOverrides <a name="GlobalacceleratorEndpointGroupPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorEndpointGroupPortOverrides {
    double EndpointPort = null,
    double ListenerPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.endpointPort">EndpointPort</a></code> | <code>double</code> | A network port number. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.listenerPort">ListenerPort</a></code> | <code>double</code> | A network port number. |

---

##### `EndpointPort`<sup>Optional</sup> <a name="EndpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.endpointPort"></a>

```csharp
public double EndpointPort { get; set; }
```

- *Type:* double

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}

---

##### `ListenerPort`<sup>Optional</sup> <a name="ListenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.listenerPort"></a>

```csharp
public double ListenerPort { get; set; }
```

- *Type:* double

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorEndpointGroupEndpointConfigurationsList <a name="GlobalacceleratorEndpointGroupEndpointConfigurationsList" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorEndpointGroupEndpointConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get"></a>

```csharp
private GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorEndpointGroupEndpointConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>[]

---


### GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference <a name="GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetAttachmentArn">ResetAttachmentArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetClientIpPreservationEnabled">ResetClientIpPreservationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetEndpointId">ResetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachmentArn` <a name="ResetAttachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetAttachmentArn"></a>

```csharp
private void ResetAttachmentArn()
```

##### `ResetClientIpPreservationEnabled` <a name="ResetClientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetClientIpPreservationEnabled"></a>

```csharp
private void ResetClientIpPreservationEnabled()
```

##### `ResetEndpointId` <a name="ResetEndpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetEndpointId"></a>

```csharp
private void ResetEndpointId()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArnInput">AttachmentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabledInput">ClientIpPreservationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn">AttachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled">ClientIpPreservationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentArnInput`<sup>Optional</sup> <a name="AttachmentArnInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArnInput"></a>

```csharp
public string AttachmentArnInput { get; }
```

- *Type:* string

---

##### `ClientIpPreservationEnabledInput`<sup>Optional</sup> <a name="ClientIpPreservationEnabledInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabledInput"></a>

```csharp
public bool|IResolvable ClientIpPreservationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `AttachmentArn`<sup>Required</sup> <a name="AttachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn"></a>

```csharp
public string AttachmentArn { get; }
```

- *Type:* string

---

##### `ClientIpPreservationEnabled`<sup>Required</sup> <a name="ClientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled"></a>

```csharp
public bool|IResolvable ClientIpPreservationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorEndpointGroupEndpointConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>

---


### GlobalacceleratorEndpointGroupPortOverridesList <a name="GlobalacceleratorEndpointGroupPortOverridesList" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorEndpointGroupPortOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get"></a>

```csharp
private GlobalacceleratorEndpointGroupPortOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorEndpointGroupPortOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>[]

---


### GlobalacceleratorEndpointGroupPortOverridesOutputReference <a name="GlobalacceleratorEndpointGroupPortOverridesOutputReference" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorEndpointGroupPortOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetEndpointPort">ResetEndpointPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetListenerPort">ResetListenerPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointPort` <a name="ResetEndpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetEndpointPort"></a>

```csharp
private void ResetEndpointPort()
```

##### `ResetListenerPort` <a name="ResetListenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetListenerPort"></a>

```csharp
private void ResetListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPortInput">EndpointPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPortInput">ListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort">EndpointPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointPortInput`<sup>Optional</sup> <a name="EndpointPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPortInput"></a>

```csharp
public double EndpointPortInput { get; }
```

- *Type:* double

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPortInput"></a>

```csharp
public double ListenerPortInput { get; }
```

- *Type:* double

---

##### `EndpointPort`<sup>Required</sup> <a name="EndpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort"></a>

```csharp
public double EndpointPort { get; }
```

- *Type:* double

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorEndpointGroupPortOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>

---



