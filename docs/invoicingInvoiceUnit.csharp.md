# `invoicingInvoiceUnit` Submodule <a name="`invoicingInvoiceUnit` Submodule" id="@cdktn/provider-awscc.invoicingInvoiceUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingInvoiceUnit <a name="InvoicingInvoiceUnit" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit awscc_invoicing_invoice_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingInvoiceUnit(Construct Scope, string Id, InvoicingInvoiceUnitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig">InvoicingInvoiceUnitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig">InvoicingInvoiceUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled">ResetTaxInheritanceDisabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceTags` <a name="PutResourceTags" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.putResourceTags"></a>

```csharp
private void PutResourceTags(IResolvable|InvoicingInvoiceUnitResourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.putResourceTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a>[]

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule"></a>

```csharp
private void PutRule(InvoicingInvoiceUnitRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetTaxInheritanceDisabled` <a name="ResetTaxInheritanceDisabled" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled"></a>

```csharp
private void ResetTaxInheritanceDisabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a InvoicingInvoiceUnit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InvoicingInvoiceUnit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InvoicingInvoiceUnit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InvoicingInvoiceUnit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InvoicingInvoiceUnit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a InvoicingInvoiceUnit resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InvoicingInvoiceUnit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InvoicingInvoiceUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the InvoicingInvoiceUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceUnitArn">InvoiceUnitArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified">LastModified</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList">InvoicingInvoiceUnitResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference">InvoicingInvoiceUnitRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput">InvoiceReceiverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput">TaxInheritanceDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver">InvoiceReceiver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled">TaxInheritanceDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InvoiceUnitArn`<sup>Required</sup> <a name="InvoiceUnitArn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceUnitArn"></a>

```csharp
public string InvoiceUnitArn { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified"></a>

```csharp
public double LastModified { get; }
```

- *Type:* double

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.resourceTags"></a>

```csharp
public InvoicingInvoiceUnitResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList">InvoicingInvoiceUnitResourceTagsList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule"></a>

```csharp
public InvoicingInvoiceUnitRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference">InvoicingInvoiceUnitRuleOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InvoiceReceiverInput`<sup>Optional</sup> <a name="InvoiceReceiverInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput"></a>

```csharp
public string InvoiceReceiverInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.resourceTagsInput"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitResourceTags[] ResourceTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a>[]

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>

---

##### `TaxInheritanceDisabledInput`<sup>Optional</sup> <a name="TaxInheritanceDisabledInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput"></a>

```csharp
public bool|IResolvable TaxInheritanceDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InvoiceReceiver`<sup>Required</sup> <a name="InvoiceReceiver" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver"></a>

```csharp
public string InvoiceReceiver { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TaxInheritanceDisabled`<sup>Required</sup> <a name="TaxInheritanceDisabled" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled"></a>

```csharp
public bool|IResolvable TaxInheritanceDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingInvoiceUnitConfig <a name="InvoicingInvoiceUnitConfig" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingInvoiceUnitConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InvoiceReceiver,
    string Name,
    InvoicingInvoiceUnitRule Rule,
    string Description = null,
    IResolvable|InvoicingInvoiceUnitResourceTags[] ResourceTags = null,
    bool|IResolvable TaxInheritanceDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver">InvoiceReceiver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#rule InvoicingInvoiceUnit#rule}. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.resourceTags">ResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#resource_tags InvoicingInvoiceUnit#resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled">TaxInheritanceDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InvoiceReceiver`<sup>Required</sup> <a name="InvoiceReceiver" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver"></a>

```csharp
public string InvoiceReceiver { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule"></a>

```csharp
public InvoicingInvoiceUnitRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#rule InvoicingInvoiceUnit#rule}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}.

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.resourceTags"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitResourceTags[] ResourceTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#resource_tags InvoicingInvoiceUnit#resource_tags}.

---

##### `TaxInheritanceDisabled`<sup>Optional</sup> <a name="TaxInheritanceDisabled" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled"></a>

```csharp
public bool|IResolvable TaxInheritanceDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}.

---

### InvoicingInvoiceUnitResourceTags <a name="InvoicingInvoiceUnitResourceTags" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingInvoiceUnitResourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#key InvoicingInvoiceUnit#key}. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#value InvoicingInvoiceUnit#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#key InvoicingInvoiceUnit#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#value InvoicingInvoiceUnit#value}.

---

### InvoicingInvoiceUnitRule <a name="InvoicingInvoiceUnitRule" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingInvoiceUnitRule {
    string[] LinkedAccounts
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts">LinkedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}. |

---

##### `LinkedAccounts`<sup>Required</sup> <a name="LinkedAccounts" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts"></a>

```csharp
public string[] LinkedAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}.

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingInvoiceUnitResourceTagsList <a name="InvoicingInvoiceUnitResourceTagsList" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingInvoiceUnitResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.get"></a>

```csharp
private InvoicingInvoiceUnitResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitResourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a>[]

---


### InvoicingInvoiceUnitResourceTagsOutputReference <a name="InvoicingInvoiceUnitResourceTagsOutputReference" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingInvoiceUnitResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitResourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitResourceTags">InvoicingInvoiceUnitResourceTags</a>

---


### InvoicingInvoiceUnitRuleOutputReference <a name="InvoicingInvoiceUnitRuleOutputReference" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InvoicingInvoiceUnitRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput">LinkedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts">LinkedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkedAccountsInput`<sup>Optional</sup> <a name="LinkedAccountsInput" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput"></a>

```csharp
public string[] LinkedAccountsInput { get; }
```

- *Type:* string[]

---

##### `LinkedAccounts`<sup>Required</sup> <a name="LinkedAccounts" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts"></a>

```csharp
public string[] LinkedAccounts { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InvoicingInvoiceUnitRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>

---



