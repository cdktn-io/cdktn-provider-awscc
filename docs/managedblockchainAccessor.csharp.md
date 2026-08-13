# `managedblockchainAccessor` Submodule <a name="`managedblockchainAccessor` Submodule" id="@cdktn/provider-awscc.managedblockchainAccessor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedblockchainAccessor <a name="ManagedblockchainAccessor" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor awscc_managedblockchain_accessor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ManagedblockchainAccessor(Construct Scope, string Id, ManagedblockchainAccessorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig">ManagedblockchainAccessorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig">ManagedblockchainAccessorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.putTags"></a>

```csharp
private void PutTags(IResolvable|ManagedblockchainAccessorTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]

---

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedblockchainAccessor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ManagedblockchainAccessor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ManagedblockchainAccessor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ManagedblockchainAccessor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ManagedblockchainAccessor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ManagedblockchainAccessor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedblockchainAccessor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedblockchainAccessor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ManagedblockchainAccessor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorId">AccessorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.billingToken">BillingToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList">ManagedblockchainAccessorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorTypeInput">AccessorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorType">AccessorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessorId`<sup>Required</sup> <a name="AccessorId" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorId"></a>

```csharp
public string AccessorId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BillingToken`<sup>Required</sup> <a name="BillingToken" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.billingToken"></a>

```csharp
public string BillingToken { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tags"></a>

```csharp
public ManagedblockchainAccessorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList">ManagedblockchainAccessorTagsList</a>

---

##### `AccessorTypeInput`<sup>Optional</sup> <a name="AccessorTypeInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorTypeInput"></a>

```csharp
public string AccessorTypeInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tagsInput"></a>

```csharp
public IResolvable|ManagedblockchainAccessorTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]

---

##### `AccessorType`<sup>Required</sup> <a name="AccessorType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.accessorType"></a>

```csharp
public string AccessorType { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedblockchainAccessorConfig <a name="ManagedblockchainAccessorConfig" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ManagedblockchainAccessorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessorType,
    string NetworkType = null,
    IResolvable|ManagedblockchainAccessorTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.accessorType">AccessorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor#accessor_type ManagedblockchainAccessor#accessor_type}. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor#network_type ManagedblockchainAccessor#network_type}. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessorType`<sup>Required</sup> <a name="AccessorType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.accessorType"></a>

```csharp
public string AccessorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor#accessor_type ManagedblockchainAccessor#accessor_type}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor#network_type ManagedblockchainAccessor#network_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorConfig.property.tags"></a>

```csharp
public IResolvable|ManagedblockchainAccessorTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor#tags ManagedblockchainAccessor#tags}

---

### ManagedblockchainAccessorTags <a name="ManagedblockchainAccessorTags" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ManagedblockchainAccessorTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor#key ManagedblockchainAccessor#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/managedblockchain_accessor#value ManagedblockchainAccessor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedblockchainAccessorTagsList <a name="ManagedblockchainAccessorTagsList" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ManagedblockchainAccessorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.get"></a>

```csharp
private ManagedblockchainAccessorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsList.property.internalValue"></a>

```csharp
public IResolvable|ManagedblockchainAccessorTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>[]

---


### ManagedblockchainAccessorTagsOutputReference <a name="ManagedblockchainAccessorTagsOutputReference" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ManagedblockchainAccessorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ManagedblockchainAccessorTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.managedblockchainAccessor.ManagedblockchainAccessorTags">ManagedblockchainAccessorTags</a>

---



