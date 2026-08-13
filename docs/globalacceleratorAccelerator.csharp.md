# `globalacceleratorAccelerator` Submodule <a name="`globalacceleratorAccelerator` Submodule" id="@cdktn/provider-awscc.globalacceleratorAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorAccelerator <a name="GlobalacceleratorAccelerator" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator awscc_globalaccelerator_accelerator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorAccelerator(Construct Scope, string Id, GlobalacceleratorAcceleratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig">GlobalacceleratorAcceleratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig">GlobalacceleratorAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsEnabled">ResetFlowLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsS3Bucket">ResetFlowLogsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsS3Prefix">ResetFlowLogsS3Prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTags"></a>

```csharp
private void PutTags(IResolvable|GlobalacceleratorAcceleratorTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>[]

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFlowLogsEnabled` <a name="ResetFlowLogsEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsEnabled"></a>

```csharp
private void ResetFlowLogsEnabled()
```

##### `ResetFlowLogsS3Bucket` <a name="ResetFlowLogsS3Bucket" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsS3Bucket"></a>

```csharp
private void ResetFlowLogsS3Bucket()
```

##### `ResetFlowLogsS3Prefix` <a name="ResetFlowLogsS3Prefix" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsS3Prefix"></a>

```csharp
private void ResetFlowLogsS3Prefix()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses"></a>

```csharp
private void ResetIpAddresses()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorAccelerator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorAccelerator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorAccelerator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorAccelerator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorAccelerator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlobalacceleratorAccelerator resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorAccelerator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorAccelerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorAccelerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.acceleratorArn">AcceleratorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dualStackDnsName">DualStackDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList">GlobalacceleratorAcceleratorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsEnabledInput">FlowLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3BucketInput">FlowLogsS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3PrefixInput">FlowLogsS3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput">IpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcceleratorArn`<sup>Required</sup> <a name="AcceleratorArn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.acceleratorArn"></a>

```csharp
public string AcceleratorArn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `DualStackDnsName`<sup>Required</sup> <a name="DualStackDnsName" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dualStackDnsName"></a>

```csharp
public string DualStackDnsName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags"></a>

```csharp
public GlobalacceleratorAcceleratorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList">GlobalacceleratorAcceleratorTagsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FlowLogsEnabledInput`<sup>Optional</sup> <a name="FlowLogsEnabledInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsEnabledInput"></a>

```csharp
public bool|IResolvable FlowLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FlowLogsS3BucketInput`<sup>Optional</sup> <a name="FlowLogsS3BucketInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3BucketInput"></a>

```csharp
public string FlowLogsS3BucketInput { get; }
```

- *Type:* string

---

##### `FlowLogsS3PrefixInput`<sup>Optional</sup> <a name="FlowLogsS3PrefixInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3PrefixInput"></a>

```csharp
public string FlowLogsS3PrefixInput { get; }
```

- *Type:* string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput"></a>

```csharp
public string[] IpAddressesInput { get; }
```

- *Type:* string[]

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput"></a>

```csharp
public IResolvable|GlobalacceleratorAcceleratorTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FlowLogsEnabled`<sup>Required</sup> <a name="FlowLogsEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsEnabled"></a>

```csharp
public bool|IResolvable FlowLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FlowLogsS3Bucket`<sup>Required</sup> <a name="FlowLogsS3Bucket" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3Bucket"></a>

```csharp
public string FlowLogsS3Bucket { get; }
```

- *Type:* string

---

##### `FlowLogsS3Prefix`<sup>Required</sup> <a name="FlowLogsS3Prefix" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3Prefix"></a>

```csharp
public string FlowLogsS3Prefix { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorAcceleratorConfig <a name="GlobalacceleratorAcceleratorConfig" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorAcceleratorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    bool|IResolvable Enabled = null,
    bool|IResolvable FlowLogsEnabled = null,
    string FlowLogsS3Bucket = null,
    string FlowLogsS3Prefix = null,
    string[] IpAddresses = null,
    string IpAddressType = null,
    IResolvable|GlobalacceleratorAcceleratorTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name">Name</a></code> | <code>string</code> | Name of accelerator. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether an accelerator is enabled. The value is true or false. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether flow logs are enabled for the accelerator. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>string</code> | The name of the Amazon S3 bucket for the flow logs. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>string</code> | The prefix for the location in the Amazon S3 bucket for the flow logs. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | The IP addresses from BYOIP Prefix pool. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | IP Address type. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether an accelerator is enabled. The value is true or false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}

---

##### `FlowLogsEnabled`<sup>Optional</sup> <a name="FlowLogsEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsEnabled"></a>

```csharp
public bool|IResolvable FlowLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether flow logs are enabled for the accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}

---

##### `FlowLogsS3Bucket`<sup>Optional</sup> <a name="FlowLogsS3Bucket" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsS3Bucket"></a>

```csharp
public string FlowLogsS3Bucket { get; set; }
```

- *Type:* string

The name of the Amazon S3 bucket for the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}

---

##### `FlowLogsS3Prefix`<sup>Optional</sup> <a name="FlowLogsS3Prefix" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsS3Prefix"></a>

```csharp
public string FlowLogsS3Prefix { get; set; }
```

- *Type:* string

The prefix for the location in the Amazon S3 bucket for the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; set; }
```

- *Type:* string[]

The IP addresses from BYOIP Prefix pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

IP Address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags"></a>

```csharp
public IResolvable|GlobalacceleratorAcceleratorTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}.

---

### GlobalacceleratorAcceleratorTags <a name="GlobalacceleratorAcceleratorTags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorAcceleratorTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.property.key">Key</a></code> | <code>string</code> | Key of the tag. Value can be 1 to 127 characters. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.property.value">Value</a></code> | <code>string</code> | Value for the tag. Value can be 1 to 255 characters. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Key of the tag. Value can be 1 to 127 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#key GlobalacceleratorAccelerator#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value for the tag. Value can be 1 to 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_accelerator#value GlobalacceleratorAccelerator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorAcceleratorTagsList <a name="GlobalacceleratorAcceleratorTagsList" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorAcceleratorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.get"></a>

```csharp
private GlobalacceleratorAcceleratorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorAcceleratorTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>[]

---


### GlobalacceleratorAcceleratorTagsOutputReference <a name="GlobalacceleratorAcceleratorTagsOutputReference" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorAcceleratorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorAcceleratorTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>

---



