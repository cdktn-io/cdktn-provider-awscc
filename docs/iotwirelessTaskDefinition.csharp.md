# `iotwirelessTaskDefinition` Submodule <a name="`iotwirelessTaskDefinition` Submodule" id="@cdktn/provider-awscc.iotwirelessTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessTaskDefinition <a name="IotwirelessTaskDefinition" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition awscc_iotwireless_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinition(Construct Scope, string Id, IotwirelessTaskDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig">IotwirelessTaskDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig">IotwirelessTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry">PutLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate">PutUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetLoRaWanUpdateGatewayTaskEntry">ResetLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTaskDefinitionType">ResetTaskDefinitionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoRaWanUpdateGatewayTaskEntry` <a name="PutLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry"></a>

```csharp
private void PutLoRaWanUpdateGatewayTaskEntry(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putLoRaWanUpdateGatewayTaskEntry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags"></a>

```csharp
private void PutTags(IResolvable|IotwirelessTaskDefinitionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]

---

##### `PutUpdate` <a name="PutUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate"></a>

```csharp
private void PutUpdate(IotwirelessTaskDefinitionUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.putUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---

##### `ResetLoRaWanUpdateGatewayTaskEntry` <a name="ResetLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetLoRaWanUpdateGatewayTaskEntry"></a>

```csharp
private void ResetLoRaWanUpdateGatewayTaskEntry()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaskDefinitionType` <a name="ResetTaskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetTaskDefinitionType"></a>

```csharp
private void ResetTaskDefinitionType()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.resetUpdate"></a>

```csharp
private void ResetUpdate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessTaskDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessTaskDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessTaskDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotwirelessTaskDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotwirelessTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessTaskDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntry">LoRaWanUpdateGatewayTaskEntry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList">IotwirelessTaskDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionId">TaskDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.update">Update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference">IotwirelessTaskDefinitionUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasksInput">AutoCreateTasksInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntryInput">LoRaWanUpdateGatewayTaskEntryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionTypeInput">TaskDefinitionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.updateInput">UpdateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasks">AutoCreateTasks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionType">TaskDefinitionType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoRaWanUpdateGatewayTaskEntry`<sup>Required</sup> <a name="LoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntry"></a>

```csharp
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference LoRaWanUpdateGatewayTaskEntry { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tags"></a>

```csharp
public IotwirelessTaskDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList">IotwirelessTaskDefinitionTagsList</a>

---

##### `TaskDefinitionId`<sup>Required</sup> <a name="TaskDefinitionId" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionId"></a>

```csharp
public string TaskDefinitionId { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.update"></a>

```csharp
public IotwirelessTaskDefinitionUpdateOutputReference Update { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference">IotwirelessTaskDefinitionUpdateOutputReference</a>

---

##### `AutoCreateTasksInput`<sup>Optional</sup> <a name="AutoCreateTasksInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasksInput"></a>

```csharp
public bool|IResolvable AutoCreateTasksInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoRaWanUpdateGatewayTaskEntryInput`<sup>Optional</sup> <a name="LoRaWanUpdateGatewayTaskEntryInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.loRaWanUpdateGatewayTaskEntryInput"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry LoRaWanUpdateGatewayTaskEntryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tagsInput"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]

---

##### `TaskDefinitionTypeInput`<sup>Optional</sup> <a name="TaskDefinitionTypeInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionTypeInput"></a>

```csharp
public string TaskDefinitionTypeInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.updateInput"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionUpdate UpdateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---

##### `AutoCreateTasks`<sup>Required</sup> <a name="AutoCreateTasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.autoCreateTasks"></a>

```csharp
public bool|IResolvable AutoCreateTasks { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TaskDefinitionType`<sup>Required</sup> <a name="TaskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.taskDefinitionType"></a>

```csharp
public string TaskDefinitionType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessTaskDefinitionConfig <a name="IotwirelessTaskDefinitionConfig" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AutoCreateTasks,
    IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry LoRaWanUpdateGatewayTaskEntry = null,
    string Name = null,
    IResolvable|IotwirelessTaskDefinitionTags[] Tags = null,
    string TaskDefinitionType = null,
    IotwirelessTaskDefinitionUpdate Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.autoCreateTasks">AutoCreateTasks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to automatically create tasks using this task definition for all gateways with the specified current version. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.loRaWanUpdateGatewayTaskEntry">LoRaWanUpdateGatewayTaskEntry</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | The list of task definitions. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.name">Name</a></code> | <code>string</code> | The name of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]</code> | A list of key-value pairs that contain metadata for the destination. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.taskDefinitionType">TaskDefinitionType</a></code> | <code>string</code> | A filter to list only the wireless gateway task definitions that use this task definition type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.update">Update</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | Information about the gateways to update. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoCreateTasks`<sup>Required</sup> <a name="AutoCreateTasks" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.autoCreateTasks"></a>

```csharp
public bool|IResolvable AutoCreateTasks { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to automatically create tasks using this task definition for all gateways with the specified current version.

If false, the task must me created by calling CreateWirelessGatewayTask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#auto_create_tasks IotwirelessTaskDefinition#auto_create_tasks}

---

##### `LoRaWanUpdateGatewayTaskEntry`<sup>Optional</sup> <a name="LoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.loRaWanUpdateGatewayTaskEntry"></a>

```csharp
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry LoRaWanUpdateGatewayTaskEntry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

The list of task definitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#lo_ra_wan_update_gateway_task_entry IotwirelessTaskDefinition#lo_ra_wan_update_gateway_task_entry}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#name IotwirelessTaskDefinition#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.tags"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#tags IotwirelessTaskDefinition#tags}

---

##### `TaskDefinitionType`<sup>Optional</sup> <a name="TaskDefinitionType" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.taskDefinitionType"></a>

```csharp
public string TaskDefinitionType { get; set; }
```

- *Type:* string

A filter to list only the wireless gateway task definitions that use this task definition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#task_definition_type IotwirelessTaskDefinition#task_definition_type}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionConfig.property.update"></a>

```csharp
public IotwirelessTaskDefinitionUpdate Update { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

Information about the gateways to update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update IotwirelessTaskDefinition#update}

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry {
    IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion CurrentVersion = null,
    IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion UpdateVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.currentVersion">CurrentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.updateVersion">UpdateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}. |

---

##### `CurrentVersion`<sup>Optional</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.currentVersion"></a>

```csharp
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion CurrentVersion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

##### `UpdateVersion`<sup>Optional</sup> <a name="UpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry.property.updateVersion"></a>

```csharp
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion UpdateVersion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion {
    string Model = null,
    string PackageVersion = null,
    string Station = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.packageVersion">PackageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.station">Station</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `PackageVersion`<sup>Optional</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.packageVersion"></a>

```csharp
public string PackageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `Station`<sup>Optional</sup> <a name="Station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion.property.station"></a>

```csharp
public string Station { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion {
    string Model = null,
    string PackageVersion = null,
    string Station = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.packageVersion">PackageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.station">Station</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `PackageVersion`<sup>Optional</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.packageVersion"></a>

```csharp
public string PackageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `Station`<sup>Optional</sup> <a name="Station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion.property.station"></a>

```csharp
public string Station { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionTags <a name="IotwirelessTaskDefinitionTags" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#key IotwirelessTaskDefinition#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#value IotwirelessTaskDefinition#value}.

---

### IotwirelessTaskDefinitionUpdate <a name="IotwirelessTaskDefinitionUpdate" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionUpdate {
    IotwirelessTaskDefinitionUpdateLoRaWan LoRaWan = null,
    string UpdateDataRole = null,
    string UpdateDataSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataRole">UpdateDataRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataSource">UpdateDataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}. |

---

##### `LoRaWan`<sup>Optional</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.loRaWan"></a>

```csharp
public IotwirelessTaskDefinitionUpdateLoRaWan LoRaWan { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#lo_ra_wan IotwirelessTaskDefinition#lo_ra_wan}.

---

##### `UpdateDataRole`<sup>Optional</sup> <a name="UpdateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataRole"></a>

```csharp
public string UpdateDataRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_data_role IotwirelessTaskDefinition#update_data_role}.

---

##### `UpdateDataSource`<sup>Optional</sup> <a name="UpdateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate.property.updateDataSource"></a>

```csharp
public string UpdateDataSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_data_source IotwirelessTaskDefinition#update_data_source}.

---

### IotwirelessTaskDefinitionUpdateLoRaWan <a name="IotwirelessTaskDefinitionUpdateLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionUpdateLoRaWan {
    IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion CurrentVersion = null,
    double SigKeyCrc = null,
    string UpdateSignature = null,
    IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion UpdateVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.currentVersion">CurrentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.sigKeyCrc">SigKeyCrc</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateSignature">UpdateSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateVersion">UpdateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}. |

---

##### `CurrentVersion`<sup>Optional</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.currentVersion"></a>

```csharp
public IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion CurrentVersion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#current_version IotwirelessTaskDefinition#current_version}.

---

##### `SigKeyCrc`<sup>Optional</sup> <a name="SigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.sigKeyCrc"></a>

```csharp
public double SigKeyCrc { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#sig_key_crc IotwirelessTaskDefinition#sig_key_crc}.

---

##### `UpdateSignature`<sup>Optional</sup> <a name="UpdateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateSignature"></a>

```csharp
public string UpdateSignature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_signature IotwirelessTaskDefinition#update_signature}.

---

##### `UpdateVersion`<sup>Optional</sup> <a name="UpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan.property.updateVersion"></a>

```csharp
public IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion UpdateVersion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#update_version IotwirelessTaskDefinition#update_version}.

---

### IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion <a name="IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion {
    string Model = null,
    string PackageVersion = null,
    string Station = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.packageVersion">PackageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.station">Station</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `PackageVersion`<sup>Optional</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.packageVersion"></a>

```csharp
public string PackageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `Station`<sup>Optional</sup> <a name="Station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion.property.station"></a>

```csharp
public string Station { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

### IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion <a name="IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion {
    string Model = null,
    string PackageVersion = null,
    string Station = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.packageVersion">PackageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.station">Station</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#model IotwirelessTaskDefinition#model}.

---

##### `PackageVersion`<sup>Optional</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.packageVersion"></a>

```csharp
public string PackageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#package_version IotwirelessTaskDefinition#package_version}.

---

##### `Station`<sup>Optional</sup> <a name="Station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion.property.station"></a>

```csharp
public string Station { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_task_definition#station IotwirelessTaskDefinition#station}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetPackageVersion">ResetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetStation">ResetStation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetPackageVersion` <a name="ResetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetPackageVersion"></a>

```csharp
private void ResetPackageVersion()
```

##### `ResetStation` <a name="ResetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.resetStation"></a>

```csharp
private void ResetStation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersionInput">PackageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.stationInput">StationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.station">Station</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersionInput"></a>

```csharp
public string PackageVersionInput { get; }
```

- *Type:* string

---

##### `StationInput`<sup>Optional</sup> <a name="StationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.stationInput"></a>

```csharp
public string StationInput { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `Station`<sup>Required</sup> <a name="Station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.station"></a>

```csharp
public string Station { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---


### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion">PutCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion">PutUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetCurrentVersion">ResetCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetUpdateVersion">ResetUpdateVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCurrentVersion` <a name="PutCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion"></a>

```csharp
private void PutCurrentVersion(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putCurrentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---

##### `PutUpdateVersion` <a name="PutUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion"></a>

```csharp
private void PutUpdateVersion(IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.putUpdateVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---

##### `ResetCurrentVersion` <a name="ResetCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetCurrentVersion"></a>

```csharp
private void ResetCurrentVersion()
```

##### `ResetUpdateVersion` <a name="ResetUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.resetUpdateVersion"></a>

```csharp
private void ResetUpdateVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersion">CurrentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersion">UpdateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersionInput">CurrentVersionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersionInput">UpdateVersionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersion"></a>

```csharp
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference CurrentVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersionOutputReference</a>

---

##### `UpdateVersion`<sup>Required</sup> <a name="UpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersion"></a>

```csharp
public IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference UpdateVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference</a>

---

##### `CurrentVersionInput`<sup>Optional</sup> <a name="CurrentVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.currentVersionInput"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion CurrentVersionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryCurrentVersion</a>

---

##### `UpdateVersionInput`<sup>Optional</sup> <a name="UpdateVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.updateVersionInput"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion UpdateVersionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntry</a>

---


### IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference <a name="IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetPackageVersion">ResetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetStation">ResetStation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetPackageVersion` <a name="ResetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetPackageVersion"></a>

```csharp
private void ResetPackageVersion()
```

##### `ResetStation` <a name="ResetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.resetStation"></a>

```csharp
private void ResetStation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersionInput">PackageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.stationInput">StationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.station">Station</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersionInput"></a>

```csharp
public string PackageVersionInput { get; }
```

- *Type:* string

---

##### `StationInput`<sup>Optional</sup> <a name="StationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.stationInput"></a>

```csharp
public string StationInput { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `Station`<sup>Required</sup> <a name="Station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.station"></a>

```csharp
public string Station { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion">IotwirelessTaskDefinitionLoRaWanUpdateGatewayTaskEntryUpdateVersion</a>

---


### IotwirelessTaskDefinitionTagsList <a name="IotwirelessTaskDefinitionTagsList" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get"></a>

```csharp
private IotwirelessTaskDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>[]

---


### IotwirelessTaskDefinitionTagsOutputReference <a name="IotwirelessTaskDefinitionTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionTags">IotwirelessTaskDefinitionTags</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetPackageVersion">ResetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetStation">ResetStation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetPackageVersion` <a name="ResetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetPackageVersion"></a>

```csharp
private void ResetPackageVersion()
```

##### `ResetStation` <a name="ResetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.resetStation"></a>

```csharp
private void ResetStation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersionInput">PackageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.stationInput">StationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.station">Station</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersionInput"></a>

```csharp
public string PackageVersionInput { get; }
```

- *Type:* string

---

##### `StationInput`<sup>Optional</sup> <a name="StationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.stationInput"></a>

```csharp
public string StationInput { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `Station`<sup>Required</sup> <a name="Station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.station"></a>

```csharp
public string Station { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionUpdateLoRaWanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion">PutCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion">PutUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetCurrentVersion">ResetCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetSigKeyCrc">ResetSigKeyCrc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateSignature">ResetUpdateSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateVersion">ResetUpdateVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCurrentVersion` <a name="PutCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion"></a>

```csharp
private void PutCurrentVersion(IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putCurrentVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---

##### `PutUpdateVersion` <a name="PutUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion"></a>

```csharp
private void PutUpdateVersion(IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.putUpdateVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---

##### `ResetCurrentVersion` <a name="ResetCurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetCurrentVersion"></a>

```csharp
private void ResetCurrentVersion()
```

##### `ResetSigKeyCrc` <a name="ResetSigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetSigKeyCrc"></a>

```csharp
private void ResetSigKeyCrc()
```

##### `ResetUpdateSignature` <a name="ResetUpdateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateSignature"></a>

```csharp
private void ResetUpdateSignature()
```

##### `ResetUpdateVersion` <a name="ResetUpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.resetUpdateVersion"></a>

```csharp
private void ResetUpdateVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersion">CurrentVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersion">UpdateVersion</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersionInput">CurrentVersionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrcInput">SigKeyCrcInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignatureInput">UpdateSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersionInput">UpdateVersionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrc">SigKeyCrc</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignature">UpdateSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersion"></a>

```csharp
public IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference CurrentVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersionOutputReference</a>

---

##### `UpdateVersion`<sup>Required</sup> <a name="UpdateVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersion"></a>

```csharp
public IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference UpdateVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference</a>

---

##### `CurrentVersionInput`<sup>Optional</sup> <a name="CurrentVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.currentVersionInput"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion CurrentVersionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion">IotwirelessTaskDefinitionUpdateLoRaWanCurrentVersion</a>

---

##### `SigKeyCrcInput`<sup>Optional</sup> <a name="SigKeyCrcInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrcInput"></a>

```csharp
public double SigKeyCrcInput { get; }
```

- *Type:* double

---

##### `UpdateSignatureInput`<sup>Optional</sup> <a name="UpdateSignatureInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignatureInput"></a>

```csharp
public string UpdateSignatureInput { get; }
```

- *Type:* string

---

##### `UpdateVersionInput`<sup>Optional</sup> <a name="UpdateVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateVersionInput"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion UpdateVersionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---

##### `SigKeyCrc`<sup>Required</sup> <a name="SigKeyCrc" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.sigKeyCrc"></a>

```csharp
public double SigKeyCrc { get; }
```

- *Type:* double

---

##### `UpdateSignature`<sup>Required</sup> <a name="UpdateSignature" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.updateSignature"></a>

```csharp
public string UpdateSignature { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWan InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---


### IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference <a name="IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetPackageVersion">ResetPackageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetStation">ResetStation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetPackageVersion` <a name="ResetPackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetPackageVersion"></a>

```csharp
private void ResetPackageVersion()
```

##### `ResetStation` <a name="ResetStation" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.resetStation"></a>

```csharp
private void ResetStation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersionInput">PackageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.stationInput">StationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.station">Station</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersionInput"></a>

```csharp
public string PackageVersionInput { get; }
```

- *Type:* string

---

##### `StationInput`<sup>Optional</sup> <a name="StationInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.stationInput"></a>

```csharp
public string StationInput { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `Station`<sup>Required</sup> <a name="Station" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.station"></a>

```csharp
public string Station { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion">IotwirelessTaskDefinitionUpdateLoRaWanUpdateVersion</a>

---


### IotwirelessTaskDefinitionUpdateOutputReference <a name="IotwirelessTaskDefinitionUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotwirelessTaskDefinitionUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan">PutLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetLoRaWan">ResetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataRole">ResetUpdateDataRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataSource">ResetUpdateDataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoRaWan` <a name="PutLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan"></a>

```csharp
private void PutLoRaWan(IotwirelessTaskDefinitionUpdateLoRaWan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---

##### `ResetLoRaWan` <a name="ResetLoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetLoRaWan"></a>

```csharp
private void ResetLoRaWan()
```

##### `ResetUpdateDataRole` <a name="ResetUpdateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataRole"></a>

```csharp
private void ResetUpdateDataRole()
```

##### `ResetUpdateDataSource` <a name="ResetUpdateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.resetUpdateDataSource"></a>

```csharp
private void ResetUpdateDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWan">LoRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWanInput">LoRaWanInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRoleInput">UpdateDataRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSourceInput">UpdateDataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRole">UpdateDataRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSource">UpdateDataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoRaWan`<sup>Required</sup> <a name="LoRaWan" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWan"></a>

```csharp
public IotwirelessTaskDefinitionUpdateLoRaWanOutputReference LoRaWan { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWanOutputReference">IotwirelessTaskDefinitionUpdateLoRaWanOutputReference</a>

---

##### `LoRaWanInput`<sup>Optional</sup> <a name="LoRaWanInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.loRaWanInput"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionUpdateLoRaWan LoRaWanInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateLoRaWan">IotwirelessTaskDefinitionUpdateLoRaWan</a>

---

##### `UpdateDataRoleInput`<sup>Optional</sup> <a name="UpdateDataRoleInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRoleInput"></a>

```csharp
public string UpdateDataRoleInput { get; }
```

- *Type:* string

---

##### `UpdateDataSourceInput`<sup>Optional</sup> <a name="UpdateDataSourceInput" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSourceInput"></a>

```csharp
public string UpdateDataSourceInput { get; }
```

- *Type:* string

---

##### `UpdateDataRole`<sup>Required</sup> <a name="UpdateDataRole" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataRole"></a>

```csharp
public string UpdateDataRole { get; }
```

- *Type:* string

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.updateDataSource"></a>

```csharp
public string UpdateDataSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotwirelessTaskDefinitionUpdate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessTaskDefinition.IotwirelessTaskDefinitionUpdate">IotwirelessTaskDefinitionUpdate</a>

---



