# `servicecatalogLaunchTemplateConstraint` Submodule <a name="`servicecatalogLaunchTemplateConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogLaunchTemplateConstraint <a name="ServicecatalogLaunchTemplateConstraint" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint awscc_servicecatalog_launch_template_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogLaunchTemplateConstraint(Construct Scope, string Id, ServicecatalogLaunchTemplateConstraintConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig">ServicecatalogLaunchTemplateConstraintConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig">ServicecatalogLaunchTemplateConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetDescription"></a>

```csharp
private void ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogLaunchTemplateConstraint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogLaunchTemplateConstraint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogLaunchTemplateConstraint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogLaunchTemplateConstraint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicecatalogLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogLaunchTemplateConstraint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogLaunchTemplateConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogLaunchTemplateConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.launchTemplateConstraintId">LaunchTemplateConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rulesInput">RulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioId">PortfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rules">Rules</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LaunchTemplateConstraintId`<sup>Required</sup> <a name="LaunchTemplateConstraintId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.launchTemplateConstraintId"></a>

```csharp
public string LaunchTemplateConstraintId { get; }
```

- *Type:* string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioIdInput"></a>

```csharp
public string PortfolioIdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rulesInput"></a>

```csharp
public string RulesInput { get; }
```

- *Type:* string

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioId"></a>

```csharp
public string PortfolioId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rules"></a>

```csharp
public string Rules { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogLaunchTemplateConstraintConfig <a name="ServicecatalogLaunchTemplateConstraintConfig" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogLaunchTemplateConstraintConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PortfolioId,
    string ProductId,
    string Rules,
    string AcceptLanguage = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.portfolioId">PortfolioId</a></code> | <code>string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.productId">ProductId</a></code> | <code>string</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.rules">Rules</a></code> | <code>string</code> | A json encoded string of the template constraint rules. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.description">Description</a></code> | <code>string</code> | The description of the constraint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.portfolioId"></a>

```csharp
public string PortfolioId { get; set; }
```

- *Type:* string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#portfolio_id ServicecatalogLaunchTemplateConstraint#portfolio_id}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#product_id ServicecatalogLaunchTemplateConstraint#product_id}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.rules"></a>

```csharp
public string Rules { get; set; }
```

- *Type:* string

A json encoded string of the template constraint rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#rules ServicecatalogLaunchTemplateConstraint#rules}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#accept_language ServicecatalogLaunchTemplateConstraint#accept_language}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#description ServicecatalogLaunchTemplateConstraint#description}

---



