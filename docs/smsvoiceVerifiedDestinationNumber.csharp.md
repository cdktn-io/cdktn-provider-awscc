# `smsvoiceVerifiedDestinationNumber` Submodule <a name="`smsvoiceVerifiedDestinationNumber` Submodule" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceVerifiedDestinationNumber <a name="SmsvoiceVerifiedDestinationNumber" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number awscc_smsvoice_verified_destination_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceVerifiedDestinationNumber(Construct Scope, string Id, SmsvoiceVerifiedDestinationNumberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig">SmsvoiceVerifiedDestinationNumberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig">SmsvoiceVerifiedDestinationNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.putTags"></a>

```csharp
private void PutTags(IResolvable|SmsvoiceVerifiedDestinationNumberTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceVerifiedDestinationNumber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceVerifiedDestinationNumber.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceVerifiedDestinationNumber.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceVerifiedDestinationNumber.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SmsvoiceVerifiedDestinationNumber.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SmsvoiceVerifiedDestinationNumber resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SmsvoiceVerifiedDestinationNumber to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SmsvoiceVerifiedDestinationNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceVerifiedDestinationNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList">SmsvoiceVerifiedDestinationNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberArn">VerifiedDestinationNumberArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberId">VerifiedDestinationNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumberInput">DestinationPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumber">DestinationPhoneNumber</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tags"></a>

```csharp
public SmsvoiceVerifiedDestinationNumberTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList">SmsvoiceVerifiedDestinationNumberTagsList</a>

---

##### `VerifiedDestinationNumberArn`<sup>Required</sup> <a name="VerifiedDestinationNumberArn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberArn"></a>

```csharp
public string VerifiedDestinationNumberArn { get; }
```

- *Type:* string

---

##### `VerifiedDestinationNumberId`<sup>Required</sup> <a name="VerifiedDestinationNumberId" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberId"></a>

```csharp
public string VerifiedDestinationNumberId { get; }
```

- *Type:* string

---

##### `DestinationPhoneNumberInput`<sup>Optional</sup> <a name="DestinationPhoneNumberInput" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumberInput"></a>

```csharp
public string DestinationPhoneNumberInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tagsInput"></a>

```csharp
public IResolvable|SmsvoiceVerifiedDestinationNumberTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]

---

##### `DestinationPhoneNumber`<sup>Required</sup> <a name="DestinationPhoneNumber" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumber"></a>

```csharp
public string DestinationPhoneNumber { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumber.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceVerifiedDestinationNumberConfig <a name="SmsvoiceVerifiedDestinationNumberConfig" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceVerifiedDestinationNumberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DestinationPhoneNumber,
    IResolvable|SmsvoiceVerifiedDestinationNumberTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.destinationPhoneNumber">DestinationPhoneNumber</a></code> | <code>string</code> | The verified destination phone number, in E.164 format. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationPhoneNumber`<sup>Required</sup> <a name="DestinationPhoneNumber" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.destinationPhoneNumber"></a>

```csharp
public string DestinationPhoneNumber { get; set; }
```

- *Type:* string

The verified destination phone number, in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#destination_phone_number SmsvoiceVerifiedDestinationNumber#destination_phone_number}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberConfig.property.tags"></a>

```csharp
public IResolvable|SmsvoiceVerifiedDestinationNumberTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#tags SmsvoiceVerifiedDestinationNumber#tags}

---

### SmsvoiceVerifiedDestinationNumberTags <a name="SmsvoiceVerifiedDestinationNumberTags" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceVerifiedDestinationNumberTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#key SmsvoiceVerifiedDestinationNumber#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/smsvoice_verified_destination_number#value SmsvoiceVerifiedDestinationNumber#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceVerifiedDestinationNumberTagsList <a name="SmsvoiceVerifiedDestinationNumberTagsList" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceVerifiedDestinationNumberTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.get"></a>

```csharp
private SmsvoiceVerifiedDestinationNumberTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsList.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceVerifiedDestinationNumberTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>[]

---


### SmsvoiceVerifiedDestinationNumberTagsOutputReference <a name="SmsvoiceVerifiedDestinationNumberTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SmsvoiceVerifiedDestinationNumberTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SmsvoiceVerifiedDestinationNumberTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.smsvoiceVerifiedDestinationNumber.SmsvoiceVerifiedDestinationNumberTags">SmsvoiceVerifiedDestinationNumberTags</a>

---



