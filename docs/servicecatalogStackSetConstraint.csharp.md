# `servicecatalogStackSetConstraint` Submodule <a name="`servicecatalogStackSetConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogStackSetConstraint <a name="ServicecatalogStackSetConstraint" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint awscc_servicecatalog_stack_set_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogStackSetConstraint(Construct Scope, string Id, ServicecatalogStackSetConstraintConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig">ServicecatalogStackSetConstraintConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig">ServicecatalogStackSetConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogStackSetConstraint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogStackSetConstraint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogStackSetConstraint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogStackSetConstraint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogStackSetConstraint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogStackSetConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogStackSetConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackSetConstraintId">StackSetConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountListInput">AccountListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRoleInput">AdminRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionListInput">RegionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControlInput">StackInstanceControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountList">AccountList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRole">AdminRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioId">PortfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionList">RegionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControl">StackInstanceControl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StackSetConstraintId`<sup>Required</sup> <a name="StackSetConstraintId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackSetConstraintId"></a>

```csharp
public string StackSetConstraintId { get; }
```

- *Type:* string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `AccountListInput`<sup>Optional</sup> <a name="AccountListInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountListInput"></a>

```csharp
public string[] AccountListInput { get; }
```

- *Type:* string[]

---

##### `AdminRoleInput`<sup>Optional</sup> <a name="AdminRoleInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRoleInput"></a>

```csharp
public string AdminRoleInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioIdInput"></a>

```csharp
public string PortfolioIdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `RegionListInput`<sup>Optional</sup> <a name="RegionListInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionListInput"></a>

```csharp
public string[] RegionListInput { get; }
```

- *Type:* string[]

---

##### `StackInstanceControlInput`<sup>Optional</sup> <a name="StackInstanceControlInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControlInput"></a>

```csharp
public string StackInstanceControlInput { get; }
```

- *Type:* string

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `AccountList`<sup>Required</sup> <a name="AccountList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountList"></a>

```csharp
public string[] AccountList { get; }
```

- *Type:* string[]

---

##### `AdminRole`<sup>Required</sup> <a name="AdminRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRole"></a>

```csharp
public string AdminRole { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioId"></a>

```csharp
public string PortfolioId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionList"></a>

```csharp
public string[] RegionList { get; }
```

- *Type:* string[]

---

##### `StackInstanceControl`<sup>Required</sup> <a name="StackInstanceControl" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControl"></a>

```csharp
public string StackInstanceControl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogStackSetConstraintConfig <a name="ServicecatalogStackSetConstraintConfig" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogStackSetConstraintConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AccountList,
    string AdminRole,
    string Description,
    string ExecutionRole,
    string PortfolioId,
    string ProductId,
    string[] RegionList,
    string StackInstanceControl,
    string AcceptLanguage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.accountList">AccountList</a></code> | <code>string[]</code> | One or more AWS accounts that will have access to the provisioned product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.adminRole">AdminRole</a></code> | <code>string</code> | AdminRole ARN. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.description">Description</a></code> | <code>string</code> | The description of the constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.executionRole">ExecutionRole</a></code> | <code>string</code> | ExecutionRole name. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.portfolioId">PortfolioId</a></code> | <code>string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.productId">ProductId</a></code> | <code>string</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.regionList">RegionList</a></code> | <code>string[]</code> | One or more AWS Regions where the provisioned product will be available. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.stackInstanceControl">StackInstanceControl</a></code> | <code>string</code> | Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | The language code. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountList`<sup>Required</sup> <a name="AccountList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.accountList"></a>

```csharp
public string[] AccountList { get; set; }
```

- *Type:* string[]

One or more AWS accounts that will have access to the provisioned product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#account_list ServicecatalogStackSetConstraint#account_list}

---

##### `AdminRole`<sup>Required</sup> <a name="AdminRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.adminRole"></a>

```csharp
public string AdminRole { get; set; }
```

- *Type:* string

AdminRole ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#admin_role ServicecatalogStackSetConstraint#admin_role}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#description ServicecatalogStackSetConstraint#description}

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

ExecutionRole name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#execution_role ServicecatalogStackSetConstraint#execution_role}

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.portfolioId"></a>

```csharp
public string PortfolioId { get; set; }
```

- *Type:* string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#portfolio_id ServicecatalogStackSetConstraint#portfolio_id}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#product_id ServicecatalogStackSetConstraint#product_id}

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.regionList"></a>

```csharp
public string[] RegionList { get; set; }
```

- *Type:* string[]

One or more AWS Regions where the provisioned product will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#region_list ServicecatalogStackSetConstraint#region_list}

---

##### `StackInstanceControl`<sup>Required</sup> <a name="StackInstanceControl" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.stackInstanceControl"></a>

```csharp
public string StackInstanceControl { get; set; }
```

- *Type:* string

Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#stack_instance_control ServicecatalogStackSetConstraint#stack_instance_control}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_stack_set_constraint#accept_language ServicecatalogStackSetConstraint#accept_language}

---



