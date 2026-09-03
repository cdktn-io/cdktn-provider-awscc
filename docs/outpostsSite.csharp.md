# `outpostsSite` Submodule <a name="`outpostsSite` Submodule" id="@cdktn/provider-awscc.outpostsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsSite <a name="OutpostsSite" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site awscc_outposts_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSite(Construct Scope, string Id, OutpostsSiteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig">OutpostsSiteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig">OutpostsSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress">PutOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties">PutRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress">PutShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress">ResetOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties">ResetRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress">ResetShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOperatingAddress` <a name="PutOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress"></a>

```csharp
private void PutOperatingAddress(OutpostsSiteOperatingAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---

##### `PutRackPhysicalProperties` <a name="PutRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties"></a>

```csharp
private void PutRackPhysicalProperties(OutpostsSiteRackPhysicalProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---

##### `PutShippingAddress` <a name="PutShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress"></a>

```csharp
private void PutShippingAddress(OutpostsSiteShippingAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags"></a>

```csharp
private void PutTags(IResolvable|OutpostsSiteTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetOperatingAddress` <a name="ResetOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress"></a>

```csharp
private void ResetOperatingAddress()
```

##### `ResetRackPhysicalProperties` <a name="ResetRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties"></a>

```csharp
private void ResetRackPhysicalProperties()
```

##### `ResetShippingAddress` <a name="ResetShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress"></a>

```csharp
private void ResetShippingAddress()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OutpostsSite.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OutpostsSite.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OutpostsSite.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OutpostsSite.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OutpostsSite to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OutpostsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress">OperatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties">RackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn">SiteArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput">OperatingAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput">RackPhysicalPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput">ShippingAddressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes">Notes</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OperatingAddress`<sup>Required</sup> <a name="OperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress"></a>

```csharp
public OutpostsSiteOperatingAddressOutputReference OperatingAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a>

---

##### `RackPhysicalProperties`<sup>Required</sup> <a name="RackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties"></a>

```csharp
public OutpostsSiteRackPhysicalPropertiesOutputReference RackPhysicalProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a>

---

##### `ShippingAddress`<sup>Required</sup> <a name="ShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress"></a>

```csharp
public OutpostsSiteShippingAddressOutputReference ShippingAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a>

---

##### `SiteArn`<sup>Required</sup> <a name="SiteArn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn"></a>

```csharp
public string SiteArn { get; }
```

- *Type:* string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags"></a>

```csharp
public OutpostsSiteTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `OperatingAddressInput`<sup>Optional</sup> <a name="OperatingAddressInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput"></a>

```csharp
public IResolvable|OutpostsSiteOperatingAddress OperatingAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---

##### `RackPhysicalPropertiesInput`<sup>Optional</sup> <a name="RackPhysicalPropertiesInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput"></a>

```csharp
public IResolvable|OutpostsSiteRackPhysicalProperties RackPhysicalPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---

##### `ShippingAddressInput`<sup>Optional</sup> <a name="ShippingAddressInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput"></a>

```csharp
public IResolvable|OutpostsSiteShippingAddress ShippingAddressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput"></a>

```csharp
public IResolvable|OutpostsSiteTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsSiteConfig <a name="OutpostsSiteConfig" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    string Notes = null,
    OutpostsSiteOperatingAddress OperatingAddress = null,
    OutpostsSiteRackPhysicalProperties RackPhysicalProperties = null,
    OutpostsSiteShippingAddress ShippingAddress = null,
    IResolvable|OutpostsSiteTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#name OutpostsSite#name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#description OutpostsSite#description}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes">Notes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#notes OutpostsSite#notes}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress">OperatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties">RackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#tags OutpostsSite#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#name OutpostsSite#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#description OutpostsSite#description}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#notes OutpostsSite#notes}.

---

##### `OperatingAddress`<sup>Optional</sup> <a name="OperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress"></a>

```csharp
public OutpostsSiteOperatingAddress OperatingAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}.

---

##### `RackPhysicalProperties`<sup>Optional</sup> <a name="RackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties"></a>

```csharp
public OutpostsSiteRackPhysicalProperties RackPhysicalProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}.

---

##### `ShippingAddress`<sup>Optional</sup> <a name="ShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress"></a>

```csharp
public OutpostsSiteShippingAddress ShippingAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags"></a>

```csharp
public IResolvable|OutpostsSiteTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#tags OutpostsSite#tags}.

---

### OutpostsSiteOperatingAddress <a name="OutpostsSiteOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteOperatingAddress {
    string AddressLine1 = null,
    string AddressLine2 = null,
    string AddressLine3 = null,
    string City = null,
    string ContactName = null,
    string ContactPhoneNumber = null,
    string CountryCode = null,
    string DistrictOrCounty = null,
    string Municipality = null,
    string PostalCode = null,
    string StateOrRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1">AddressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2">AddressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3">AddressLine3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName">ContactName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode">CountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty">DistrictOrCounty</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality">Municipality</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion">StateOrRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `AddressLine3`<sup>Optional</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `ContactName`<sup>Optional</sup> <a name="ContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName"></a>

```csharp
public string ContactName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `ContactPhoneNumber`<sup>Optional</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber"></a>

```csharp
public string ContactPhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `DistrictOrCounty`<sup>Optional</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty"></a>

```csharp
public string DistrictOrCounty { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `Municipality`<sup>Optional</sup> <a name="Municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality"></a>

```csharp
public string Municipality { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `StateOrRegion`<sup>Optional</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion"></a>

```csharp
public string StateOrRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteRackPhysicalProperties <a name="OutpostsSiteRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteRackPhysicalProperties {
    string FiberOpticCableType = null,
    string MaximumSupportedWeightLbs = null,
    string OpticalStandard = null,
    string PowerConnector = null,
    string PowerDrawKva = null,
    string PowerFeedDrop = null,
    string PowerPhase = null,
    string UplinkCount = null,
    string UplinkGbps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType">FiberOpticCableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs">MaximumSupportedWeightLbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard">OpticalStandard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector">PowerConnector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva">PowerDrawKva</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop">PowerFeedDrop</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase">PowerPhase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount">UplinkCount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps">UplinkGbps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}. |

---

##### `FiberOpticCableType`<sup>Optional</sup> <a name="FiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType"></a>

```csharp
public string FiberOpticCableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}.

---

##### `MaximumSupportedWeightLbs`<sup>Optional</sup> <a name="MaximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs"></a>

```csharp
public string MaximumSupportedWeightLbs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}.

---

##### `OpticalStandard`<sup>Optional</sup> <a name="OpticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard"></a>

```csharp
public string OpticalStandard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}.

---

##### `PowerConnector`<sup>Optional</sup> <a name="PowerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector"></a>

```csharp
public string PowerConnector { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}.

---

##### `PowerDrawKva`<sup>Optional</sup> <a name="PowerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva"></a>

```csharp
public string PowerDrawKva { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}.

---

##### `PowerFeedDrop`<sup>Optional</sup> <a name="PowerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop"></a>

```csharp
public string PowerFeedDrop { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}.

---

##### `PowerPhase`<sup>Optional</sup> <a name="PowerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase"></a>

```csharp
public string PowerPhase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}.

---

##### `UplinkCount`<sup>Optional</sup> <a name="UplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount"></a>

```csharp
public string UplinkCount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}.

---

##### `UplinkGbps`<sup>Optional</sup> <a name="UplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps"></a>

```csharp
public string UplinkGbps { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}.

---

### OutpostsSiteShippingAddress <a name="OutpostsSiteShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteShippingAddress {
    string AddressLine1 = null,
    string AddressLine2 = null,
    string AddressLine3 = null,
    string City = null,
    string ContactName = null,
    string ContactPhoneNumber = null,
    string CountryCode = null,
    string DistrictOrCounty = null,
    string Municipality = null,
    string PostalCode = null,
    string StateOrRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1">AddressLine1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2">AddressLine2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3">AddressLine3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName">ContactName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode">CountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty">DistrictOrCounty</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality">Municipality</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion">StateOrRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `AddressLine3`<sup>Optional</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `ContactName`<sup>Optional</sup> <a name="ContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName"></a>

```csharp
public string ContactName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `ContactPhoneNumber`<sup>Optional</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber"></a>

```csharp
public string ContactPhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `DistrictOrCounty`<sup>Optional</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty"></a>

```csharp
public string DistrictOrCounty { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `Municipality`<sup>Optional</sup> <a name="Municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality"></a>

```csharp
public string Municipality { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `StateOrRegion`<sup>Optional</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion"></a>

```csharp
public string StateOrRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteTags <a name="OutpostsSiteTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#key OutpostsSite#key}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#value OutpostsSite#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#key OutpostsSite#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#value OutpostsSite#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsSiteOperatingAddressOutputReference <a name="OutpostsSiteOperatingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteOperatingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3">ResetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName">ResetContactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber">ResetContactPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty">ResetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality">ResetMunicipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion">ResetStateOrRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1"></a>

```csharp
private void ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2"></a>

```csharp
private void ResetAddressLine2()
```

##### `ResetAddressLine3` <a name="ResetAddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3"></a>

```csharp
private void ResetAddressLine3()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetContactName` <a name="ResetContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName"></a>

```csharp
private void ResetContactName()
```

##### `ResetContactPhoneNumber` <a name="ResetContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber"></a>

```csharp
private void ResetContactPhoneNumber()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetDistrictOrCounty` <a name="ResetDistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty"></a>

```csharp
private void ResetDistrictOrCounty()
```

##### `ResetMunicipality` <a name="ResetMunicipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality"></a>

```csharp
private void ResetMunicipality()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetStateOrRegion` <a name="ResetStateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion"></a>

```csharp
private void ResetStateOrRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input">AddressLine3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput">ContactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput">ContactPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput">DistrictOrCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput">MunicipalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput">StateOrRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3">AddressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName">ContactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty">DistrictOrCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality">Municipality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion">StateOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input"></a>

```csharp
public string AddressLine1Input { get; }
```

- *Type:* string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input"></a>

```csharp
public string AddressLine2Input { get; }
```

- *Type:* string

---

##### `AddressLine3Input`<sup>Optional</sup> <a name="AddressLine3Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input"></a>

```csharp
public string AddressLine3Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `ContactNameInput`<sup>Optional</sup> <a name="ContactNameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput"></a>

```csharp
public string ContactNameInput { get; }
```

- *Type:* string

---

##### `ContactPhoneNumberInput`<sup>Optional</sup> <a name="ContactPhoneNumberInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput"></a>

```csharp
public string ContactPhoneNumberInput { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `DistrictOrCountyInput`<sup>Optional</sup> <a name="DistrictOrCountyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput"></a>

```csharp
public string DistrictOrCountyInput { get; }
```

- *Type:* string

---

##### `MunicipalityInput`<sup>Optional</sup> <a name="MunicipalityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput"></a>

```csharp
public string MunicipalityInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `StateOrRegionInput`<sup>Optional</sup> <a name="StateOrRegionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput"></a>

```csharp
public string StateOrRegionInput { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName"></a>

```csharp
public string ContactName { get; }
```

- *Type:* string

---

##### `ContactPhoneNumber`<sup>Required</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber"></a>

```csharp
public string ContactPhoneNumber { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `DistrictOrCounty`<sup>Required</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty"></a>

```csharp
public string DistrictOrCounty { get; }
```

- *Type:* string

---

##### `Municipality`<sup>Required</sup> <a name="Municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality"></a>

```csharp
public string Municipality { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `StateOrRegion`<sup>Required</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion"></a>

```csharp
public string StateOrRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OutpostsSiteOperatingAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---


### OutpostsSiteRackPhysicalPropertiesOutputReference <a name="OutpostsSiteRackPhysicalPropertiesOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteRackPhysicalPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType">ResetFiberOpticCableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs">ResetMaximumSupportedWeightLbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard">ResetOpticalStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector">ResetPowerConnector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva">ResetPowerDrawKva</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop">ResetPowerFeedDrop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase">ResetPowerPhase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount">ResetUplinkCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps">ResetUplinkGbps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFiberOpticCableType` <a name="ResetFiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType"></a>

```csharp
private void ResetFiberOpticCableType()
```

##### `ResetMaximumSupportedWeightLbs` <a name="ResetMaximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs"></a>

```csharp
private void ResetMaximumSupportedWeightLbs()
```

##### `ResetOpticalStandard` <a name="ResetOpticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard"></a>

```csharp
private void ResetOpticalStandard()
```

##### `ResetPowerConnector` <a name="ResetPowerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector"></a>

```csharp
private void ResetPowerConnector()
```

##### `ResetPowerDrawKva` <a name="ResetPowerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva"></a>

```csharp
private void ResetPowerDrawKva()
```

##### `ResetPowerFeedDrop` <a name="ResetPowerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop"></a>

```csharp
private void ResetPowerFeedDrop()
```

##### `ResetPowerPhase` <a name="ResetPowerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase"></a>

```csharp
private void ResetPowerPhase()
```

##### `ResetUplinkCount` <a name="ResetUplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount"></a>

```csharp
private void ResetUplinkCount()
```

##### `ResetUplinkGbps` <a name="ResetUplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps"></a>

```csharp
private void ResetUplinkGbps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput">FiberOpticCableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput">MaximumSupportedWeightLbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput">OpticalStandardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput">PowerConnectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput">PowerDrawKvaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput">PowerFeedDropInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput">PowerPhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput">UplinkCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput">UplinkGbpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType">FiberOpticCableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs">MaximumSupportedWeightLbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard">OpticalStandard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector">PowerConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva">PowerDrawKva</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop">PowerFeedDrop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase">PowerPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount">UplinkCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps">UplinkGbps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FiberOpticCableTypeInput`<sup>Optional</sup> <a name="FiberOpticCableTypeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput"></a>

```csharp
public string FiberOpticCableTypeInput { get; }
```

- *Type:* string

---

##### `MaximumSupportedWeightLbsInput`<sup>Optional</sup> <a name="MaximumSupportedWeightLbsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput"></a>

```csharp
public string MaximumSupportedWeightLbsInput { get; }
```

- *Type:* string

---

##### `OpticalStandardInput`<sup>Optional</sup> <a name="OpticalStandardInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput"></a>

```csharp
public string OpticalStandardInput { get; }
```

- *Type:* string

---

##### `PowerConnectorInput`<sup>Optional</sup> <a name="PowerConnectorInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput"></a>

```csharp
public string PowerConnectorInput { get; }
```

- *Type:* string

---

##### `PowerDrawKvaInput`<sup>Optional</sup> <a name="PowerDrawKvaInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput"></a>

```csharp
public string PowerDrawKvaInput { get; }
```

- *Type:* string

---

##### `PowerFeedDropInput`<sup>Optional</sup> <a name="PowerFeedDropInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput"></a>

```csharp
public string PowerFeedDropInput { get; }
```

- *Type:* string

---

##### `PowerPhaseInput`<sup>Optional</sup> <a name="PowerPhaseInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput"></a>

```csharp
public string PowerPhaseInput { get; }
```

- *Type:* string

---

##### `UplinkCountInput`<sup>Optional</sup> <a name="UplinkCountInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput"></a>

```csharp
public string UplinkCountInput { get; }
```

- *Type:* string

---

##### `UplinkGbpsInput`<sup>Optional</sup> <a name="UplinkGbpsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput"></a>

```csharp
public string UplinkGbpsInput { get; }
```

- *Type:* string

---

##### `FiberOpticCableType`<sup>Required</sup> <a name="FiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType"></a>

```csharp
public string FiberOpticCableType { get; }
```

- *Type:* string

---

##### `MaximumSupportedWeightLbs`<sup>Required</sup> <a name="MaximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs"></a>

```csharp
public string MaximumSupportedWeightLbs { get; }
```

- *Type:* string

---

##### `OpticalStandard`<sup>Required</sup> <a name="OpticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard"></a>

```csharp
public string OpticalStandard { get; }
```

- *Type:* string

---

##### `PowerConnector`<sup>Required</sup> <a name="PowerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector"></a>

```csharp
public string PowerConnector { get; }
```

- *Type:* string

---

##### `PowerDrawKva`<sup>Required</sup> <a name="PowerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva"></a>

```csharp
public string PowerDrawKva { get; }
```

- *Type:* string

---

##### `PowerFeedDrop`<sup>Required</sup> <a name="PowerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop"></a>

```csharp
public string PowerFeedDrop { get; }
```

- *Type:* string

---

##### `PowerPhase`<sup>Required</sup> <a name="PowerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase"></a>

```csharp
public string PowerPhase { get; }
```

- *Type:* string

---

##### `UplinkCount`<sup>Required</sup> <a name="UplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount"></a>

```csharp
public string UplinkCount { get; }
```

- *Type:* string

---

##### `UplinkGbps`<sup>Required</sup> <a name="UplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps"></a>

```csharp
public string UplinkGbps { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OutpostsSiteRackPhysicalProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---


### OutpostsSiteShippingAddressOutputReference <a name="OutpostsSiteShippingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteShippingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3">ResetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName">ResetContactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber">ResetContactPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty">ResetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality">ResetMunicipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion">ResetStateOrRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1"></a>

```csharp
private void ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2"></a>

```csharp
private void ResetAddressLine2()
```

##### `ResetAddressLine3` <a name="ResetAddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3"></a>

```csharp
private void ResetAddressLine3()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetContactName` <a name="ResetContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName"></a>

```csharp
private void ResetContactName()
```

##### `ResetContactPhoneNumber` <a name="ResetContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber"></a>

```csharp
private void ResetContactPhoneNumber()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode"></a>

```csharp
private void ResetCountryCode()
```

##### `ResetDistrictOrCounty` <a name="ResetDistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty"></a>

```csharp
private void ResetDistrictOrCounty()
```

##### `ResetMunicipality` <a name="ResetMunicipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality"></a>

```csharp
private void ResetMunicipality()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetStateOrRegion` <a name="ResetStateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion"></a>

```csharp
private void ResetStateOrRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input">AddressLine3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput">ContactNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput">ContactPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput">DistrictOrCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput">MunicipalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput">StateOrRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1">AddressLine1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2">AddressLine2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3">AddressLine3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName">ContactName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty">DistrictOrCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality">Municipality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion">StateOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input"></a>

```csharp
public string AddressLine1Input { get; }
```

- *Type:* string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input"></a>

```csharp
public string AddressLine2Input { get; }
```

- *Type:* string

---

##### `AddressLine3Input`<sup>Optional</sup> <a name="AddressLine3Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input"></a>

```csharp
public string AddressLine3Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `ContactNameInput`<sup>Optional</sup> <a name="ContactNameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput"></a>

```csharp
public string ContactNameInput { get; }
```

- *Type:* string

---

##### `ContactPhoneNumberInput`<sup>Optional</sup> <a name="ContactPhoneNumberInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput"></a>

```csharp
public string ContactPhoneNumberInput { get; }
```

- *Type:* string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `DistrictOrCountyInput`<sup>Optional</sup> <a name="DistrictOrCountyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput"></a>

```csharp
public string DistrictOrCountyInput { get; }
```

- *Type:* string

---

##### `MunicipalityInput`<sup>Optional</sup> <a name="MunicipalityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput"></a>

```csharp
public string MunicipalityInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `StateOrRegionInput`<sup>Optional</sup> <a name="StateOrRegionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput"></a>

```csharp
public string StateOrRegionInput { get; }
```

- *Type:* string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1"></a>

```csharp
public string AddressLine1 { get; }
```

- *Type:* string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2"></a>

```csharp
public string AddressLine2 { get; }
```

- *Type:* string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3"></a>

```csharp
public string AddressLine3 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName"></a>

```csharp
public string ContactName { get; }
```

- *Type:* string

---

##### `ContactPhoneNumber`<sup>Required</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber"></a>

```csharp
public string ContactPhoneNumber { get; }
```

- *Type:* string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `DistrictOrCounty`<sup>Required</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty"></a>

```csharp
public string DistrictOrCounty { get; }
```

- *Type:* string

---

##### `Municipality`<sup>Required</sup> <a name="Municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality"></a>

```csharp
public string Municipality { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `StateOrRegion`<sup>Required</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion"></a>

```csharp
public string StateOrRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OutpostsSiteShippingAddress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---


### OutpostsSiteTagsList <a name="OutpostsSiteTagsList" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get"></a>

```csharp
private OutpostsSiteTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue"></a>

```csharp
public IResolvable|OutpostsSiteTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>[]

---


### OutpostsSiteTagsOutputReference <a name="OutpostsSiteTagsOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OutpostsSiteTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OutpostsSiteTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags">OutpostsSiteTags</a>

---



