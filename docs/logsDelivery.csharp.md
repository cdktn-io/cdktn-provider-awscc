# `logsDelivery` Submodule <a name="`logsDelivery` Submodule" id="@cdktn/provider-awscc.logsDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsDelivery <a name="LogsDelivery" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery awscc_logs_delivery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDelivery(Construct Scope, string Id, LogsDeliveryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig">LogsDeliveryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig">LogsDeliveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetRecordFields">ResetRecordFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3EnableHiveCompatiblePath">ResetS3EnableHiveCompatiblePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3SuffixPath">ResetS3SuffixPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags"></a>

```csharp
private void PutTags(IResolvable|LogsDeliveryTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]

---

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetRecordFields` <a name="ResetRecordFields" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetRecordFields"></a>

```csharp
private void ResetRecordFields()
```

##### `ResetS3EnableHiveCompatiblePath` <a name="ResetS3EnableHiveCompatiblePath" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3EnableHiveCompatiblePath"></a>

```csharp
private void ResetS3EnableHiveCompatiblePath()
```

##### `ResetS3SuffixPath` <a name="ResetS3SuffixPath" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3SuffixPath"></a>

```csharp
private void ResetS3SuffixPath()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsDelivery resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsDelivery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsDelivery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsDelivery.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsDelivery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LogsDelivery resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsDelivery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LogsDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationType">DeliveryDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryId">DeliveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList">LogsDeliveryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArnInput">DeliveryDestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceNameInput">DeliverySourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFieldsInput">RecordFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePathInput">S3EnableHiveCompatiblePathInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPathInput">S3SuffixPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArn">DeliveryDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceName">DeliverySourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFields">RecordFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePath">S3EnableHiveCompatiblePath</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPath">S3SuffixPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeliveryDestinationType`<sup>Required</sup> <a name="DeliveryDestinationType" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationType"></a>

```csharp
public string DeliveryDestinationType { get; }
```

- *Type:* string

---

##### `DeliveryId`<sup>Required</sup> <a name="DeliveryId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryId"></a>

```csharp
public string DeliveryId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tags"></a>

```csharp
public LogsDeliveryTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList">LogsDeliveryTagsList</a>

---

##### `DeliveryDestinationArnInput`<sup>Optional</sup> <a name="DeliveryDestinationArnInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArnInput"></a>

```csharp
public string DeliveryDestinationArnInput { get; }
```

- *Type:* string

---

##### `DeliverySourceNameInput`<sup>Optional</sup> <a name="DeliverySourceNameInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceNameInput"></a>

```csharp
public string DeliverySourceNameInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `RecordFieldsInput`<sup>Optional</sup> <a name="RecordFieldsInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFieldsInput"></a>

```csharp
public string[] RecordFieldsInput { get; }
```

- *Type:* string[]

---

##### `S3EnableHiveCompatiblePathInput`<sup>Optional</sup> <a name="S3EnableHiveCompatiblePathInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePathInput"></a>

```csharp
public bool|IResolvable S3EnableHiveCompatiblePathInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `S3SuffixPathInput`<sup>Optional</sup> <a name="S3SuffixPathInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPathInput"></a>

```csharp
public string S3SuffixPathInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tagsInput"></a>

```csharp
public IResolvable|LogsDeliveryTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]

---

##### `DeliveryDestinationArn`<sup>Required</sup> <a name="DeliveryDestinationArn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArn"></a>

```csharp
public string DeliveryDestinationArn { get; }
```

- *Type:* string

---

##### `DeliverySourceName`<sup>Required</sup> <a name="DeliverySourceName" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceName"></a>

```csharp
public string DeliverySourceName { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `RecordFields`<sup>Required</sup> <a name="RecordFields" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFields"></a>

```csharp
public string[] RecordFields { get; }
```

- *Type:* string[]

---

##### `S3EnableHiveCompatiblePath`<sup>Required</sup> <a name="S3EnableHiveCompatiblePath" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePath"></a>

```csharp
public bool|IResolvable S3EnableHiveCompatiblePath { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `S3SuffixPath`<sup>Required</sup> <a name="S3SuffixPath" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPath"></a>

```csharp
public string S3SuffixPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsDeliveryConfig <a name="LogsDeliveryConfig" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DeliveryDestinationArn,
    string DeliverySourceName,
    string FieldDelimiter = null,
    string[] RecordFields = null,
    bool|IResolvable S3EnableHiveCompatiblePath = null,
    string S3SuffixPath = null,
    IResolvable|LogsDeliveryTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliveryDestinationArn">DeliveryDestinationArn</a></code> | <code>string</code> | The ARN of the delivery destination that is associated with this delivery. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliverySourceName">DeliverySourceName</a></code> | <code>string</code> | The name of the delivery source that is associated with this delivery. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.recordFields">RecordFields</a></code> | <code>string[]</code> | The list of record fields to be delivered to the destination, in order. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3EnableHiveCompatiblePath">S3EnableHiveCompatiblePath</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3SuffixPath">S3SuffixPath</a></code> | <code>string</code> | This string allows re-configuring the S3 object prefix to contain either static or variable sections. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]</code> | The tags that have been assigned to this delivery. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeliveryDestinationArn`<sup>Required</sup> <a name="DeliveryDestinationArn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliveryDestinationArn"></a>

```csharp
public string DeliveryDestinationArn { get; set; }
```

- *Type:* string

The ARN of the delivery destination that is associated with this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#delivery_destination_arn LogsDelivery#delivery_destination_arn}

---

##### `DeliverySourceName`<sup>Required</sup> <a name="DeliverySourceName" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliverySourceName"></a>

```csharp
public string DeliverySourceName { get; set; }
```

- *Type:* string

The name of the delivery source that is associated with this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#delivery_source_name LogsDelivery#delivery_source_name}

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#field_delimiter LogsDelivery#field_delimiter}

---

##### `RecordFields`<sup>Optional</sup> <a name="RecordFields" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.recordFields"></a>

```csharp
public string[] RecordFields { get; set; }
```

- *Type:* string[]

The list of record fields to be delivered to the destination, in order.

If the delivery's log source has mandatory fields, they must be included in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#record_fields LogsDelivery#record_fields}

---

##### `S3EnableHiveCompatiblePath`<sup>Optional</sup> <a name="S3EnableHiveCompatiblePath" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3EnableHiveCompatiblePath"></a>

```csharp
public bool|IResolvable S3EnableHiveCompatiblePath { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#s3_enable_hive_compatible_path LogsDelivery#s3_enable_hive_compatible_path}

---

##### `S3SuffixPath`<sup>Optional</sup> <a name="S3SuffixPath" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3SuffixPath"></a>

```csharp
public string S3SuffixPath { get; set; }
```

- *Type:* string

This string allows re-configuring the S3 object prefix to contain either static or variable sections.

The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#s3_suffix_path LogsDelivery#s3_suffix_path}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.tags"></a>

```csharp
public IResolvable|LogsDeliveryTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]

The tags that have been assigned to this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#tags LogsDelivery#tags}

---

### LogsDeliveryTags <a name="LogsDeliveryTags" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. You can specify a value that is 1 to 128 Unicode. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag. You can specify a value that is 1 to 128 Unicode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#key LogsDelivery#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery#value LogsDelivery#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsDeliveryTagsList <a name="LogsDeliveryTagsList" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get"></a>

```csharp
private LogsDeliveryTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.internalValue"></a>

```csharp
public IResolvable|LogsDeliveryTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]

---


### LogsDeliveryTagsOutputReference <a name="LogsDeliveryTagsOutputReference" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsDeliveryTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogsDeliveryTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>

---



