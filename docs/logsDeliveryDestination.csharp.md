# `logsDeliveryDestination` Submodule <a name="`logsDeliveryDestination` Submodule" id="@cdktn/provider-awscc.logsDeliveryDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsDeliveryDestination <a name="LogsDeliveryDestination" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination awscc_logs_delivery_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryDestination(Construct Scope, string Id, LogsDeliveryDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig">LogsDeliveryDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig">LogsDeliveryDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy">PutDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationPolicy">ResetDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationType">ResetDeliveryDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDestinationResourceArn">ResetDestinationResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeliveryDestinationPolicy` <a name="PutDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy"></a>

```csharp
private void PutDeliveryDestinationPolicy(LogsDeliveryDestinationDeliveryDestinationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags"></a>

```csharp
private void PutTags(IResolvable|LogsDeliveryDestinationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]

---

##### `ResetDeliveryDestinationPolicy` <a name="ResetDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationPolicy"></a>

```csharp
private void ResetDeliveryDestinationPolicy()
```

##### `ResetDeliveryDestinationType` <a name="ResetDeliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationType"></a>

```csharp
private void ResetDeliveryDestinationType()
```

##### `ResetDestinationResourceArn` <a name="ResetDestinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDestinationResourceArn"></a>

```csharp
private void ResetDestinationResourceArn()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsDeliveryDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsDeliveryDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsDeliveryDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsDeliveryDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsDeliveryDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LogsDeliveryDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsDeliveryDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsDeliveryDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LogsDeliveryDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicy">DeliveryDestinationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference">LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList">LogsDeliveryDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicyInput">DeliveryDestinationPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationTypeInput">DeliveryDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArnInput">DestinationResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationType">DeliveryDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArn">DestinationResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeliveryDestinationPolicy`<sup>Required</sup> <a name="DeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicy"></a>

```csharp
public LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference DeliveryDestinationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference">LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tags"></a>

```csharp
public LogsDeliveryDestinationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList">LogsDeliveryDestinationTagsList</a>

---

##### `DeliveryDestinationPolicyInput`<sup>Optional</sup> <a name="DeliveryDestinationPolicyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicyInput"></a>

```csharp
public IResolvable|LogsDeliveryDestinationDeliveryDestinationPolicy DeliveryDestinationPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---

##### `DeliveryDestinationTypeInput`<sup>Optional</sup> <a name="DeliveryDestinationTypeInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationTypeInput"></a>

```csharp
public string DeliveryDestinationTypeInput { get; }
```

- *Type:* string

---

##### `DestinationResourceArnInput`<sup>Optional</sup> <a name="DestinationResourceArnInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArnInput"></a>

```csharp
public string DestinationResourceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tagsInput"></a>

```csharp
public IResolvable|LogsDeliveryDestinationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]

---

##### `DeliveryDestinationType`<sup>Required</sup> <a name="DeliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationType"></a>

```csharp
public string DeliveryDestinationType { get; }
```

- *Type:* string

---

##### `DestinationResourceArn`<sup>Required</sup> <a name="DestinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArn"></a>

```csharp
public string DestinationResourceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsDeliveryDestinationConfig <a name="LogsDeliveryDestinationConfig" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    LogsDeliveryDestinationDeliveryDestinationPolicy DeliveryDestinationPolicy = null,
    string DeliveryDestinationType = null,
    string DestinationResourceArn = null,
    string OutputFormat = null,
    IResolvable|LogsDeliveryDestinationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.name">Name</a></code> | <code>string</code> | The name of this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationPolicy">DeliveryDestinationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationType">DeliveryDestinationType</a></code> | <code>string</code> | Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.destinationResourceArn">DestinationResourceArn</a></code> | <code>string</code> | The ARN of the Amazon Web Services destination that this delivery destination represents. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.outputFormat">OutputFormat</a></code> | <code>string</code> | The format of the logs that are sent to this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]</code> | The tags that have been assigned to this delivery destination. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#name LogsDeliveryDestination#name}

---

##### `DeliveryDestinationPolicy`<sup>Optional</sup> <a name="DeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationPolicy"></a>

```csharp
public LogsDeliveryDestinationDeliveryDestinationPolicy DeliveryDestinationPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.

The policy must be in JSON string format.

Length Constraints: Maximum length of 51200

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

##### `DeliveryDestinationType`<sup>Optional</sup> <a name="DeliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationType"></a>

```csharp
public string DeliveryDestinationType { get; set; }
```

- *Type:* string

Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#delivery_destination_type LogsDeliveryDestination#delivery_destination_type}

---

##### `DestinationResourceArn`<sup>Optional</sup> <a name="DestinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.destinationResourceArn"></a>

```csharp
public string DestinationResourceArn { get; set; }
```

- *Type:* string

The ARN of the Amazon Web Services destination that this delivery destination represents.

That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#destination_resource_arn LogsDeliveryDestination#destination_resource_arn}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

The format of the logs that are sent to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#output_format LogsDeliveryDestination#output_format}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.tags"></a>

```csharp
public IResolvable|LogsDeliveryDestinationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]

The tags that have been assigned to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#tags LogsDeliveryDestination#tags}

---

### LogsDeliveryDestinationDeliveryDestinationPolicy <a name="LogsDeliveryDestinationDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryDestinationDeliveryDestinationPolicy {
    string DeliveryDestinationName = null,
    string DeliveryDestinationPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationName">DeliveryDestinationName</a></code> | <code>string</code> | The name of the delivery destination to assign this policy to. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationPolicy">DeliveryDestinationPolicy</a></code> | <code>string</code> | The contents of the policy attached to the delivery destination. |

---

##### `DeliveryDestinationName`<sup>Optional</sup> <a name="DeliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationName"></a>

```csharp
public string DeliveryDestinationName { get; set; }
```

- *Type:* string

The name of the delivery destination to assign this policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#delivery_destination_name LogsDeliveryDestination#delivery_destination_name}

---

##### `DeliveryDestinationPolicy`<sup>Optional</sup> <a name="DeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationPolicy"></a>

```csharp
public string DeliveryDestinationPolicy { get; set; }
```

- *Type:* string

The contents of the policy attached to the delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

### LogsDeliveryDestinationTags <a name="LogsDeliveryDestinationTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryDestinationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#key LogsDeliveryDestination#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_delivery_destination#value LogsDeliveryDestination#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference <a name="LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationName">ResetDeliveryDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationPolicy">ResetDeliveryDestinationPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryDestinationName` <a name="ResetDeliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationName"></a>

```csharp
private void ResetDeliveryDestinationName()
```

##### `ResetDeliveryDestinationPolicy` <a name="ResetDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationPolicy"></a>

```csharp
private void ResetDeliveryDestinationPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationNameInput">DeliveryDestinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicyInput">DeliveryDestinationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationName">DeliveryDestinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicy">DeliveryDestinationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryDestinationNameInput`<sup>Optional</sup> <a name="DeliveryDestinationNameInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationNameInput"></a>

```csharp
public string DeliveryDestinationNameInput { get; }
```

- *Type:* string

---

##### `DeliveryDestinationPolicyInput`<sup>Optional</sup> <a name="DeliveryDestinationPolicyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicyInput"></a>

```csharp
public string DeliveryDestinationPolicyInput { get; }
```

- *Type:* string

---

##### `DeliveryDestinationName`<sup>Required</sup> <a name="DeliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationName"></a>

```csharp
public string DeliveryDestinationName { get; }
```

- *Type:* string

---

##### `DeliveryDestinationPolicy`<sup>Required</sup> <a name="DeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicy"></a>

```csharp
public string DeliveryDestinationPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogsDeliveryDestinationDeliveryDestinationPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---


### LogsDeliveryDestinationTagsList <a name="LogsDeliveryDestinationTagsList" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryDestinationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get"></a>

```csharp
private LogsDeliveryDestinationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.internalValue"></a>

```csharp
public IResolvable|LogsDeliveryDestinationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>[]

---


### LogsDeliveryDestinationTagsOutputReference <a name="LogsDeliveryDestinationTagsOutputReference" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryDestinationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogsDeliveryDestinationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>

---



