# `iotTopicRuleDestination` Submodule <a name="`iotTopicRuleDestination` Submodule" id="@cdktn/provider-awscc.iotTopicRuleDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTopicRuleDestination <a name="IotTopicRuleDestination" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination awscc_iot_topic_rule_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotTopicRuleDestination(Construct Scope, string Id, IotTopicRuleDestinationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig">IotTopicRuleDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig">IotTopicRuleDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties">PutHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties">PutVpcProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetHttpUrlProperties">ResetHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetVpcProperties">ResetVpcProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHttpUrlProperties` <a name="PutHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties"></a>

```csharp
private void PutHttpUrlProperties(IotTopicRuleDestinationHttpUrlProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---

##### `PutVpcProperties` <a name="PutVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties"></a>

```csharp
private void PutVpcProperties(IotTopicRuleDestinationVpcProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---

##### `ResetHttpUrlProperties` <a name="ResetHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetHttpUrlProperties"></a>

```csharp
private void ResetHttpUrlProperties()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetVpcProperties` <a name="ResetVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetVpcProperties"></a>

```csharp
private void ResetVpcProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotTopicRuleDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotTopicRuleDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotTopicRuleDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotTopicRuleDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotTopicRuleDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotTopicRuleDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotTopicRuleDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotTopicRuleDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotTopicRuleDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlProperties">HttpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference">IotTopicRuleDestinationHttpUrlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcProperties">VpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference">IotTopicRuleDestinationVpcPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlPropertiesInput">HttpUrlPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcPropertiesInput">VpcPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HttpUrlProperties`<sup>Required</sup> <a name="HttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlProperties"></a>

```csharp
public IotTopicRuleDestinationHttpUrlPropertiesOutputReference HttpUrlProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference">IotTopicRuleDestinationHttpUrlPropertiesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `VpcProperties`<sup>Required</sup> <a name="VpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcProperties"></a>

```csharp
public IotTopicRuleDestinationVpcPropertiesOutputReference VpcProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference">IotTopicRuleDestinationVpcPropertiesOutputReference</a>

---

##### `HttpUrlPropertiesInput`<sup>Optional</sup> <a name="HttpUrlPropertiesInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlPropertiesInput"></a>

```csharp
public IResolvable|IotTopicRuleDestinationHttpUrlProperties HttpUrlPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `VpcPropertiesInput`<sup>Optional</sup> <a name="VpcPropertiesInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcPropertiesInput"></a>

```csharp
public IResolvable|IotTopicRuleDestinationVpcProperties VpcPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTopicRuleDestinationConfig <a name="IotTopicRuleDestinationConfig" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotTopicRuleDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IotTopicRuleDestinationHttpUrlProperties HttpUrlProperties = null,
    string Status = null,
    IotTopicRuleDestinationVpcProperties VpcProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.httpUrlProperties">HttpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | HTTP URL destination properties. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.status">Status</a></code> | <code>string</code> | The status of the TopicRuleDestination. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcProperties">VpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | VPC destination properties. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HttpUrlProperties`<sup>Optional</sup> <a name="HttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.httpUrlProperties"></a>

```csharp
public IotTopicRuleDestinationHttpUrlProperties HttpUrlProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

HTTP URL destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#http_url_properties IotTopicRuleDestination#http_url_properties}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the TopicRuleDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#status IotTopicRuleDestination#status}

---

##### `VpcProperties`<sup>Optional</sup> <a name="VpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcProperties"></a>

```csharp
public IotTopicRuleDestinationVpcProperties VpcProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

VPC destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#vpc_properties IotTopicRuleDestination#vpc_properties}

---

### IotTopicRuleDestinationHttpUrlProperties <a name="IotTopicRuleDestinationHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotTopicRuleDestinationHttpUrlProperties {
    string ConfirmationUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.property.confirmationUrl">ConfirmationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}. |

---

##### `ConfirmationUrl`<sup>Optional</sup> <a name="ConfirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.property.confirmationUrl"></a>

```csharp
public string ConfirmationUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}.

---

### IotTopicRuleDestinationVpcProperties <a name="IotTopicRuleDestinationVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotTopicRuleDestinationVpcProperties {
    string RoleArn = null,
    string[] SecurityGroups = null,
    string[] SubnetIds = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTopicRuleDestinationHttpUrlPropertiesOutputReference <a name="IotTopicRuleDestinationHttpUrlPropertiesOutputReference" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotTopicRuleDestinationHttpUrlPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resetConfirmationUrl">ResetConfirmationUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfirmationUrl` <a name="ResetConfirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resetConfirmationUrl"></a>

```csharp
private void ResetConfirmationUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrlInput">ConfirmationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl">ConfirmationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfirmationUrlInput`<sup>Optional</sup> <a name="ConfirmationUrlInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrlInput"></a>

```csharp
public string ConfirmationUrlInput { get; }
```

- *Type:* string

---

##### `ConfirmationUrl`<sup>Required</sup> <a name="ConfirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl"></a>

```csharp
public string ConfirmationUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotTopicRuleDestinationHttpUrlProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---


### IotTopicRuleDestinationVpcPropertiesOutputReference <a name="IotTopicRuleDestinationVpcPropertiesOutputReference" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotTopicRuleDestinationVpcPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotTopicRuleDestinationVpcProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---



