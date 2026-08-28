# `iotwirelessNetworkAnalyzerConfiguration` Submodule <a name="`iotwirelessNetworkAnalyzerConfiguration` Submodule" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessNetworkAnalyzerConfiguration <a name="IotwirelessNetworkAnalyzerConfiguration" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessNetworkAnalyzerConfiguration(Construct Scope, string Id, IotwirelessNetworkAnalyzerConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig">IotwirelessNetworkAnalyzerConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig">IotwirelessNetworkAnalyzerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent">PutTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTraceContent">ResetTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessDevices">ResetWirelessDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessGateways">ResetWirelessGateways</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|IotwirelessNetworkAnalyzerConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]

---

##### `PutTraceContent` <a name="PutTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent"></a>

```csharp
private void PutTraceContent(IotwirelessNetworkAnalyzerConfigurationTraceContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTraceContent` <a name="ResetTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTraceContent"></a>

```csharp
private void ResetTraceContent()
```

##### `ResetWirelessDevices` <a name="ResetWirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessDevices"></a>

```csharp
private void ResetWirelessDevices()
```

##### `ResetWirelessGateways` <a name="ResetWirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessGateways"></a>

```csharp
private void ResetWirelessGateways()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessNetworkAnalyzerConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessNetworkAnalyzerConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessNetworkAnalyzerConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessNetworkAnalyzerConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessNetworkAnalyzerConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessNetworkAnalyzerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessNetworkAnalyzerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList">IotwirelessNetworkAnalyzerConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContent">TraceContent</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContentInput">TraceContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevicesInput">WirelessDevicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGatewaysInput">WirelessGatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices">WirelessDevices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways">WirelessGateways</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tags"></a>

```csharp
public IotwirelessNetworkAnalyzerConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList">IotwirelessNetworkAnalyzerConfigurationTagsList</a>

---

##### `TraceContent`<sup>Required</sup> <a name="TraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContent"></a>

```csharp
public IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference TraceContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]

---

##### `TraceContentInput`<sup>Optional</sup> <a name="TraceContentInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContentInput"></a>

```csharp
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTraceContent TraceContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---

##### `WirelessDevicesInput`<sup>Optional</sup> <a name="WirelessDevicesInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevicesInput"></a>

```csharp
public string[] WirelessDevicesInput { get; }
```

- *Type:* string[]

---

##### `WirelessGatewaysInput`<sup>Optional</sup> <a name="WirelessGatewaysInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGatewaysInput"></a>

```csharp
public string[] WirelessGatewaysInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WirelessDevices`<sup>Required</sup> <a name="WirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices"></a>

```csharp
public string[] WirelessDevices { get; }
```

- *Type:* string[]

---

##### `WirelessGateways`<sup>Required</sup> <a name="WirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways"></a>

```csharp
public string[] WirelessGateways { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessNetworkAnalyzerConfigurationConfig <a name="IotwirelessNetworkAnalyzerConfigurationConfig" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessNetworkAnalyzerConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    IResolvable|IotwirelessNetworkAnalyzerConfigurationTags[] Tags = null,
    IotwirelessNetworkAnalyzerConfigurationTraceContent TraceContent = null,
    string[] WirelessDevices = null,
    string[] WirelessGateways = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Name of the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.description">Description</a></code> | <code>string</code> | The description of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.traceContent">TraceContent</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | Trace content for your wireless gateway and wireless device resources. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessDevices">WirelessDevices</a></code> | <code>string[]</code> | List of wireless gateway resources that have been added to the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessGateways">WirelessGateways</a></code> | <code>string[]</code> | List of wireless gateway resources that have been added to the network analyzer configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#name IotwirelessNetworkAnalyzerConfiguration#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#description IotwirelessNetworkAnalyzerConfiguration#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#tags IotwirelessNetworkAnalyzerConfiguration#tags}

---

##### `TraceContent`<sup>Optional</sup> <a name="TraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.traceContent"></a>

```csharp
public IotwirelessNetworkAnalyzerConfigurationTraceContent TraceContent { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

Trace content for your wireless gateway and wireless device resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#trace_content IotwirelessNetworkAnalyzerConfiguration#trace_content}

---

##### `WirelessDevices`<sup>Optional</sup> <a name="WirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessDevices"></a>

```csharp
public string[] WirelessDevices { get; set; }
```

- *Type:* string[]

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_devices IotwirelessNetworkAnalyzerConfiguration#wireless_devices}

---

##### `WirelessGateways`<sup>Optional</sup> <a name="WirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessGateways"></a>

```csharp
public string[] WirelessGateways { get; set; }
```

- *Type:* string[]

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_gateways IotwirelessNetworkAnalyzerConfiguration#wireless_gateways}

---

### IotwirelessNetworkAnalyzerConfigurationTags <a name="IotwirelessNetworkAnalyzerConfigurationTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessNetworkAnalyzerConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#key IotwirelessNetworkAnalyzerConfiguration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#value IotwirelessNetworkAnalyzerConfiguration#value}

---

### IotwirelessNetworkAnalyzerConfigurationTraceContent <a name="IotwirelessNetworkAnalyzerConfigurationTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessNetworkAnalyzerConfigurationTraceContent {
    string LogLevel = null,
    string WirelessDeviceFrameInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.wirelessDeviceFrameInfo">WirelessDeviceFrameInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}. |

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}.

---

##### `WirelessDeviceFrameInfo`<sup>Optional</sup> <a name="WirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.wirelessDeviceFrameInfo"></a>

```csharp
public string WirelessDeviceFrameInfo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessNetworkAnalyzerConfigurationTagsList <a name="IotwirelessNetworkAnalyzerConfigurationTagsList" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessNetworkAnalyzerConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get"></a>

```csharp
private IotwirelessNetworkAnalyzerConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>[]

---


### IotwirelessNetworkAnalyzerConfigurationTagsOutputReference <a name="IotwirelessNetworkAnalyzerConfigurationTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessNetworkAnalyzerConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>

---


### IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference <a name="IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetWirelessDeviceFrameInfo">ResetWirelessDeviceFrameInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetWirelessDeviceFrameInfo` <a name="ResetWirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetWirelessDeviceFrameInfo"></a>

```csharp
private void ResetWirelessDeviceFrameInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfoInput">WirelessDeviceFrameInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo">WirelessDeviceFrameInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `WirelessDeviceFrameInfoInput`<sup>Optional</sup> <a name="WirelessDeviceFrameInfoInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfoInput"></a>

```csharp
public string WirelessDeviceFrameInfoInput { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `WirelessDeviceFrameInfo`<sup>Required</sup> <a name="WirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo"></a>

```csharp
public string WirelessDeviceFrameInfo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTraceContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---



