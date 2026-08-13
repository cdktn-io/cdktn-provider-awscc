# `iotcoredeviceadvisorSuiteDefinition` Submodule <a name="`iotcoredeviceadvisorSuiteDefinition` Submodule" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotcoredeviceadvisorSuiteDefinition <a name="IotcoredeviceadvisorSuiteDefinition" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinition(Construct Scope, string Id, IotcoredeviceadvisorSuiteDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig">IotcoredeviceadvisorSuiteDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig">IotcoredeviceadvisorSuiteDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration">PutSuiteDefinitionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSuiteDefinitionConfiguration` <a name="PutSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration"></a>

```csharp
private void PutSuiteDefinitionConfiguration(IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags"></a>

```csharp
private void PutTags(IResolvable|IotcoredeviceadvisorSuiteDefinitionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotcoredeviceadvisorSuiteDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotcoredeviceadvisorSuiteDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotcoredeviceadvisorSuiteDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotcoredeviceadvisorSuiteDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotcoredeviceadvisorSuiteDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotcoredeviceadvisorSuiteDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotcoredeviceadvisorSuiteDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn">SuiteDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration">SuiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId">SuiteDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion">SuiteDefinitionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList">IotcoredeviceadvisorSuiteDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfigurationInput">SuiteDefinitionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SuiteDefinitionArn`<sup>Required</sup> <a name="SuiteDefinitionArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn"></a>

```csharp
public string SuiteDefinitionArn { get; }
```

- *Type:* string

---

##### `SuiteDefinitionConfiguration`<sup>Required</sup> <a name="SuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration"></a>

```csharp
public IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference SuiteDefinitionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a>

---

##### `SuiteDefinitionId`<sup>Required</sup> <a name="SuiteDefinitionId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId"></a>

```csharp
public string SuiteDefinitionId { get; }
```

- *Type:* string

---

##### `SuiteDefinitionVersion`<sup>Required</sup> <a name="SuiteDefinitionVersion" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion"></a>

```csharp
public string SuiteDefinitionVersion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tags"></a>

```csharp
public IotcoredeviceadvisorSuiteDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList">IotcoredeviceadvisorSuiteDefinitionTagsList</a>

---

##### `SuiteDefinitionConfigurationInput`<sup>Optional</sup> <a name="SuiteDefinitionConfigurationInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfigurationInput"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration SuiteDefinitionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tagsInput"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotcoredeviceadvisorSuiteDefinitionConfig <a name="IotcoredeviceadvisorSuiteDefinitionConfig" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration SuiteDefinitionConfiguration,
    IResolvable|IotcoredeviceadvisorSuiteDefinitionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.suiteDefinitionConfiguration">SuiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SuiteDefinitionConfiguration`<sup>Required</sup> <a name="SuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.suiteDefinitionConfiguration"></a>

```csharp
public IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration SuiteDefinitionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.tags"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#tags IotcoredeviceadvisorSuiteDefinition#tags}

---

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration {
    string DevicePermissionRoleArn,
    string RootGroup,
    IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[] Devices = null,
    bool|IResolvable IntendedForQualification = null,
    string SuiteDefinitionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devicePermissionRoleArn">DevicePermissionRoleArn</a></code> | <code>string</code> | The device permission role arn of the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.rootGroup">RootGroup</a></code> | <code>string</code> | The root group of the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devices">Devices</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]</code> | The devices being tested in the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.intendedForQualification">IntendedForQualification</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the tests are intended for qualification in a suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.suiteDefinitionName">SuiteDefinitionName</a></code> | <code>string</code> | The Name of the suite definition. |

---

##### `DevicePermissionRoleArn`<sup>Required</sup> <a name="DevicePermissionRoleArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devicePermissionRoleArn"></a>

```csharp
public string DevicePermissionRoleArn { get; set; }
```

- *Type:* string

The device permission role arn of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#device_permission_role_arn IotcoredeviceadvisorSuiteDefinition#device_permission_role_arn}

---

##### `RootGroup`<sup>Required</sup> <a name="RootGroup" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.rootGroup"></a>

```csharp
public string RootGroup { get; set; }
```

- *Type:* string

The root group of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#root_group IotcoredeviceadvisorSuiteDefinition#root_group}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devices"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[] Devices { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]

The devices being tested in the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#devices IotcoredeviceadvisorSuiteDefinition#devices}

---

##### `IntendedForQualification`<sup>Optional</sup> <a name="IntendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.intendedForQualification"></a>

```csharp
public bool|IResolvable IntendedForQualification { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the tests are intended for qualification in a suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#intended_for_qualification IotcoredeviceadvisorSuiteDefinition#intended_for_qualification}

---

##### `SuiteDefinitionName`<sup>Optional</sup> <a name="SuiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.suiteDefinitionName"></a>

```csharp
public string SuiteDefinitionName { get; set; }
```

- *Type:* string

The Name of the suite definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_name IotcoredeviceadvisorSuiteDefinition#suite_definition_name}

---

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices {
    string CertificateArn = null,
    string ThingArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.thingArn">ThingArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}.

---

##### `ThingArn`<sup>Optional</sup> <a name="ThingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.thingArn"></a>

```csharp
public string ThingArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}.

---

### IotcoredeviceadvisorSuiteDefinitionTags <a name="IotcoredeviceadvisorSuiteDefinitionTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#key IotcoredeviceadvisorSuiteDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#value IotcoredeviceadvisorSuiteDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get"></a>

```csharp
private IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.internalValue"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]

---


### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetThingArn">ResetThingArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetThingArn` <a name="ResetThingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetThingArn"></a>

```csharp
private void ResetThingArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArnInput">ThingArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn">ThingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `ThingArnInput`<sup>Optional</sup> <a name="ThingArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArnInput"></a>

```csharp
public string ThingArnInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `ThingArn`<sup>Required</sup> <a name="ThingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn"></a>

```csharp
public string ThingArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>

---


### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices">PutDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetIntendedForQualification">ResetIntendedForQualification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetSuiteDefinitionName">ResetSuiteDefinitionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDevices` <a name="PutDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices"></a>

```csharp
private void PutDevices(IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]

---

##### `ResetDevices` <a name="ResetDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetDevices"></a>

```csharp
private void ResetDevices()
```

##### `ResetIntendedForQualification` <a name="ResetIntendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetIntendedForQualification"></a>

```csharp
private void ResetIntendedForQualification()
```

##### `ResetSuiteDefinitionName` <a name="ResetSuiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetSuiteDefinitionName"></a>

```csharp
private void ResetSuiteDefinitionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices">Devices</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArnInput">DevicePermissionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicesInput">DevicesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualificationInput">IntendedForQualificationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroupInput">RootGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionNameInput">SuiteDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn">DevicePermissionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification">IntendedForQualification</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup">RootGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName">SuiteDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices"></a>

```csharp
public IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList Devices { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a>

---

##### `DevicePermissionRoleArnInput`<sup>Optional</sup> <a name="DevicePermissionRoleArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArnInput"></a>

```csharp
public string DevicePermissionRoleArnInput { get; }
```

- *Type:* string

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicesInput"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[] DevicesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>[]

---

##### `IntendedForQualificationInput`<sup>Optional</sup> <a name="IntendedForQualificationInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualificationInput"></a>

```csharp
public bool|IResolvable IntendedForQualificationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RootGroupInput`<sup>Optional</sup> <a name="RootGroupInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroupInput"></a>

```csharp
public string RootGroupInput { get; }
```

- *Type:* string

---

##### `SuiteDefinitionNameInput`<sup>Optional</sup> <a name="SuiteDefinitionNameInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionNameInput"></a>

```csharp
public string SuiteDefinitionNameInput { get; }
```

- *Type:* string

---

##### `DevicePermissionRoleArn`<sup>Required</sup> <a name="DevicePermissionRoleArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn"></a>

```csharp
public string DevicePermissionRoleArn { get; }
```

- *Type:* string

---

##### `IntendedForQualification`<sup>Required</sup> <a name="IntendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification"></a>

```csharp
public bool|IResolvable IntendedForQualification { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RootGroup`<sup>Required</sup> <a name="RootGroup" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup"></a>

```csharp
public string RootGroup { get; }
```

- *Type:* string

---

##### `SuiteDefinitionName`<sup>Required</sup> <a name="SuiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName"></a>

```csharp
public string SuiteDefinitionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---


### IotcoredeviceadvisorSuiteDefinitionTagsList <a name="IotcoredeviceadvisorSuiteDefinitionTagsList" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get"></a>

```csharp
private IotcoredeviceadvisorSuiteDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>[]

---


### IotcoredeviceadvisorSuiteDefinitionTagsOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionTagsOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotcoredeviceadvisorSuiteDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotcoredeviceadvisorSuiteDefinitionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>

---



