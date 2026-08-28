# `iotanalyticsChannel` Submodule <a name="`iotanalyticsChannel` Submodule" id="@cdktn/provider-awscc.iotanalyticsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsChannel <a name="IotanalyticsChannel" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel awscc_iotanalytics_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannel(Construct Scope, string Id, IotanalyticsChannelConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig">IotanalyticsChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig">IotanalyticsChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putChannelStorage">PutChannelStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putRetentionPeriod">PutRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetChannelStorage">ResetChannelStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutChannelStorage` <a name="PutChannelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putChannelStorage"></a>

```csharp
private void PutChannelStorage(IotanalyticsChannelChannelStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putChannelStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a>

---

##### `PutRetentionPeriod` <a name="PutRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putRetentionPeriod"></a>

```csharp
private void PutRetentionPeriod(IotanalyticsChannelRetentionPeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putTags"></a>

```csharp
private void PutTags(IResolvable|IotanalyticsChannelTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]

---

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetChannelName"></a>

```csharp
private void ResetChannelName()
```

##### `ResetChannelStorage` <a name="ResetChannelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetChannelStorage"></a>

```csharp
private void ResetChannelStorage()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetRetentionPeriod"></a>

```csharp
private void ResetRetentionPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotanalyticsChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotanalyticsChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotanalyticsChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotanalyticsChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotanalyticsChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotanalyticsChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotanalyticsChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotanalyticsChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelStorage">ChannelStorage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference">IotanalyticsChannelChannelStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference">IotanalyticsChannelRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList">IotanalyticsChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelStorageInput">ChannelStorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `ChannelStorage`<sup>Required</sup> <a name="ChannelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelStorage"></a>

```csharp
public IotanalyticsChannelChannelStorageOutputReference ChannelStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference">IotanalyticsChannelChannelStorageOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.retentionPeriod"></a>

```csharp
public IotanalyticsChannelRetentionPeriodOutputReference RetentionPeriod { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference">IotanalyticsChannelRetentionPeriodOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tags"></a>

```csharp
public IotanalyticsChannelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList">IotanalyticsChannelTagsList</a>

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `ChannelStorageInput`<sup>Optional</sup> <a name="ChannelStorageInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelStorageInput"></a>

```csharp
public IResolvable|IotanalyticsChannelChannelStorage ChannelStorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a>

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.retentionPeriodInput"></a>

```csharp
public IResolvable|IotanalyticsChannelRetentionPeriod RetentionPeriodInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tagsInput"></a>

```csharp
public IResolvable|IotanalyticsChannelTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsChannelChannelStorage <a name="IotanalyticsChannelChannelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelChannelStorage {
    IotanalyticsChannelChannelStorageCustomerManagedS3 CustomerManagedS3 = null,
    string ServiceManagedS3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.property.customerManagedS3">CustomerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#customer_managed_s3 IotanalyticsChannel#customer_managed_s3}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.property.serviceManagedS3">ServiceManagedS3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#service_managed_s3 IotanalyticsChannel#service_managed_s3}. |

---

##### `CustomerManagedS3`<sup>Optional</sup> <a name="CustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.property.customerManagedS3"></a>

```csharp
public IotanalyticsChannelChannelStorageCustomerManagedS3 CustomerManagedS3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#customer_managed_s3 IotanalyticsChannel#customer_managed_s3}.

---

##### `ServiceManagedS3`<sup>Optional</sup> <a name="ServiceManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage.property.serviceManagedS3"></a>

```csharp
public string ServiceManagedS3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#service_managed_s3 IotanalyticsChannel#service_managed_s3}.

---

### IotanalyticsChannelChannelStorageCustomerManagedS3 <a name="IotanalyticsChannelChannelStorageCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelChannelStorageCustomerManagedS3 {
    string Bucket = null,
    string KeyPrefix = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#bucket IotanalyticsChannel#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key_prefix IotanalyticsChannel#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#role_arn IotanalyticsChannel#role_arn}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#bucket IotanalyticsChannel#bucket}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key_prefix IotanalyticsChannel#key_prefix}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#role_arn IotanalyticsChannel#role_arn}.

---

### IotanalyticsChannelConfig <a name="IotanalyticsChannelConfig" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelName = null,
    IotanalyticsChannelChannelStorage ChannelStorage = null,
    IotanalyticsChannelRetentionPeriod RetentionPeriod = null,
    IResolvable|IotanalyticsChannelTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_name IotanalyticsChannel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.channelStorage">ChannelStorage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_storage IotanalyticsChannel#channel_storage}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#retention_period IotanalyticsChannel#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#tags IotanalyticsChannel#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_name IotanalyticsChannel#channel_name}.

---

##### `ChannelStorage`<sup>Optional</sup> <a name="ChannelStorage" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.channelStorage"></a>

```csharp
public IotanalyticsChannelChannelStorage ChannelStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#channel_storage IotanalyticsChannel#channel_storage}.

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.retentionPeriod"></a>

```csharp
public IotanalyticsChannelRetentionPeriod RetentionPeriod { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#retention_period IotanalyticsChannel#retention_period}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelConfig.property.tags"></a>

```csharp
public IResolvable|IotanalyticsChannelTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#tags IotanalyticsChannel#tags}.

---

### IotanalyticsChannelRetentionPeriod <a name="IotanalyticsChannelRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelRetentionPeriod {
    double NumberOfDays = null,
    bool|IResolvable Unlimited = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.property.numberOfDays">NumberOfDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#number_of_days IotanalyticsChannel#number_of_days}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.property.unlimited">Unlimited</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#unlimited IotanalyticsChannel#unlimited}. |

---

##### `NumberOfDays`<sup>Optional</sup> <a name="NumberOfDays" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.property.numberOfDays"></a>

```csharp
public double NumberOfDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#number_of_days IotanalyticsChannel#number_of_days}.

---

##### `Unlimited`<sup>Optional</sup> <a name="Unlimited" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod.property.unlimited"></a>

```csharp
public bool|IResolvable Unlimited { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#unlimited IotanalyticsChannel#unlimited}.

---

### IotanalyticsChannelTags <a name="IotanalyticsChannelTags" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key IotanalyticsChannel#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#value IotanalyticsChannel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#key IotanalyticsChannel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_channel#value IotanalyticsChannel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference <a name="IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetKeyPrefix"></a>

```csharp
private void ResetKeyPrefix()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefixInput"></a>

```csharp
public string KeyPrefixInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotanalyticsChannelChannelStorageCustomerManagedS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a>

---


### IotanalyticsChannelChannelStorageOutputReference <a name="IotanalyticsChannelChannelStorageOutputReference" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelChannelStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.putCustomerManagedS3">PutCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resetCustomerManagedS3">ResetCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resetServiceManagedS3">ResetServiceManagedS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedS3` <a name="PutCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.putCustomerManagedS3"></a>

```csharp
private void PutCustomerManagedS3(IotanalyticsChannelChannelStorageCustomerManagedS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.putCustomerManagedS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a>

---

##### `ResetCustomerManagedS3` <a name="ResetCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resetCustomerManagedS3"></a>

```csharp
private void ResetCustomerManagedS3()
```

##### `ResetServiceManagedS3` <a name="ResetServiceManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.resetServiceManagedS3"></a>

```csharp
private void ResetServiceManagedS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3">CustomerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference">IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3Input">CustomerManagedS3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3Input">ServiceManagedS3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3">ServiceManagedS3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedS3`<sup>Required</sup> <a name="CustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3"></a>

```csharp
public IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference CustomerManagedS3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference">IotanalyticsChannelChannelStorageCustomerManagedS3OutputReference</a>

---

##### `CustomerManagedS3Input`<sup>Optional</sup> <a name="CustomerManagedS3Input" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.customerManagedS3Input"></a>

```csharp
public IResolvable|IotanalyticsChannelChannelStorageCustomerManagedS3 CustomerManagedS3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageCustomerManagedS3">IotanalyticsChannelChannelStorageCustomerManagedS3</a>

---

##### `ServiceManagedS3Input`<sup>Optional</sup> <a name="ServiceManagedS3Input" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3Input"></a>

```csharp
public string ServiceManagedS3Input { get; }
```

- *Type:* string

---

##### `ServiceManagedS3`<sup>Required</sup> <a name="ServiceManagedS3" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.serviceManagedS3"></a>

```csharp
public string ServiceManagedS3 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotanalyticsChannelChannelStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelChannelStorage">IotanalyticsChannelChannelStorage</a>

---


### IotanalyticsChannelRetentionPeriodOutputReference <a name="IotanalyticsChannelRetentionPeriodOutputReference" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelRetentionPeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resetNumberOfDays">ResetNumberOfDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resetUnlimited">ResetUnlimited</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfDays` <a name="ResetNumberOfDays" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resetNumberOfDays"></a>

```csharp
private void ResetNumberOfDays()
```

##### `ResetUnlimited` <a name="ResetUnlimited" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.resetUnlimited"></a>

```csharp
private void ResetUnlimited()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDaysInput">NumberOfDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.unlimitedInput">UnlimitedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDays">NumberOfDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.unlimited">Unlimited</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfDaysInput`<sup>Optional</sup> <a name="NumberOfDaysInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDaysInput"></a>

```csharp
public double NumberOfDaysInput { get; }
```

- *Type:* double

---

##### `UnlimitedInput`<sup>Optional</sup> <a name="UnlimitedInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.unlimitedInput"></a>

```csharp
public bool|IResolvable UnlimitedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberOfDays`<sup>Required</sup> <a name="NumberOfDays" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.numberOfDays"></a>

```csharp
public double NumberOfDays { get; }
```

- *Type:* double

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.unlimited"></a>

```csharp
public bool|IResolvable Unlimited { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriodOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotanalyticsChannelRetentionPeriod InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelRetentionPeriod">IotanalyticsChannelRetentionPeriod</a>

---


### IotanalyticsChannelTagsList <a name="IotanalyticsChannelTagsList" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.get"></a>

```csharp
private IotanalyticsChannelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotanalyticsChannelTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>[]

---


### IotanalyticsChannelTagsOutputReference <a name="IotanalyticsChannelTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotanalyticsChannelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotanalyticsChannelTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotanalyticsChannel.IotanalyticsChannelTags">IotanalyticsChannelTags</a>

---



