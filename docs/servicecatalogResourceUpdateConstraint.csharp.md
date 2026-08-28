# `servicecatalogResourceUpdateConstraint` Submodule <a name="`servicecatalogResourceUpdateConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogResourceUpdateConstraint <a name="ServicecatalogResourceUpdateConstraint" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint awscc_servicecatalog_resource_update_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogResourceUpdateConstraint(Construct Scope, string Id, ServicecatalogResourceUpdateConstraintConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig">ServicecatalogResourceUpdateConstraintConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig">ServicecatalogResourceUpdateConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.resetDescription"></a>

```csharp
private void ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogResourceUpdateConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogResourceUpdateConstraint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogResourceUpdateConstraint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogResourceUpdateConstraint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogResourceUpdateConstraint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicecatalogResourceUpdateConstraint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogResourceUpdateConstraint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogResourceUpdateConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogResourceUpdateConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.resourceUpdateConstraintId">ResourceUpdateConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProductInput">TagUpdateOnProvisionedProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioId">PortfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProduct">TagUpdateOnProvisionedProduct</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceUpdateConstraintId`<sup>Required</sup> <a name="ResourceUpdateConstraintId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.resourceUpdateConstraintId"></a>

```csharp
public string ResourceUpdateConstraintId { get; }
```

- *Type:* string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioIdInput"></a>

```csharp
public string PortfolioIdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `TagUpdateOnProvisionedProductInput`<sup>Optional</sup> <a name="TagUpdateOnProvisionedProductInput" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProductInput"></a>

```csharp
public string TagUpdateOnProvisionedProductInput { get; }
```

- *Type:* string

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.portfolioId"></a>

```csharp
public string PortfolioId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `TagUpdateOnProvisionedProduct`<sup>Required</sup> <a name="TagUpdateOnProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tagUpdateOnProvisionedProduct"></a>

```csharp
public string TagUpdateOnProvisionedProduct { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogResourceUpdateConstraintConfig <a name="ServicecatalogResourceUpdateConstraintConfig" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogResourceUpdateConstraintConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PortfolioId,
    string ProductId,
    string TagUpdateOnProvisionedProduct,
    string AcceptLanguage = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.portfolioId">PortfolioId</a></code> | <code>string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.productId">ProductId</a></code> | <code>string</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.tagUpdateOnProvisionedProduct">TagUpdateOnProvisionedProduct</a></code> | <code>string</code> | ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.description">Description</a></code> | <code>string</code> | The description of the constraint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.portfolioId"></a>

```csharp
public string PortfolioId { get; set; }
```

- *Type:* string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#portfolio_id ServicecatalogResourceUpdateConstraint#portfolio_id}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#product_id ServicecatalogResourceUpdateConstraint#product_id}

---

##### `TagUpdateOnProvisionedProduct`<sup>Required</sup> <a name="TagUpdateOnProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.tagUpdateOnProvisionedProduct"></a>

```csharp
public string TagUpdateOnProvisionedProduct { get; set; }
```

- *Type:* string

ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#tag_update_on_provisioned_product ServicecatalogResourceUpdateConstraint#tag_update_on_provisioned_product}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#accept_language ServicecatalogResourceUpdateConstraint#accept_language}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogResourceUpdateConstraint.ServicecatalogResourceUpdateConstraintConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_resource_update_constraint#description ServicecatalogResourceUpdateConstraint#description}

---



