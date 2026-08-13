# `servicecatalogLaunchRoleConstraint` Submodule <a name="`servicecatalogLaunchRoleConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogLaunchRoleConstraint <a name="ServicecatalogLaunchRoleConstraint" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_role_constraint awscc_servicecatalog_launch_role_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogLaunchRoleConstraint(Construct Scope, string Id, ServicecatalogLaunchRoleConstraintConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig">ServicecatalogLaunchRoleConstraintConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig">ServicecatalogLaunchRoleConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetLocalRoleName">ResetLocalRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocalRoleName` <a name="ResetLocalRoleName" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetLocalRoleName"></a>

```csharp
private void ResetLocalRoleName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogLaunchRoleConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogLaunchRoleConstraint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogLaunchRoleConstraint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogLaunchRoleConstraint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicecatalogLaunchRoleConstraint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicecatalogLaunchRoleConstraint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogLaunchRoleConstraint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogLaunchRoleConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_role_constraint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogLaunchRoleConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.launchRoleConstraintId">LaunchRoleConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.localRoleNameInput">LocalRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.portfolioIdInput">PortfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.localRoleName">LocalRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.portfolioId">PortfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LaunchRoleConstraintId`<sup>Required</sup> <a name="LaunchRoleConstraintId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.launchRoleConstraintId"></a>

```csharp
public string LaunchRoleConstraintId { get; }
```

- *Type:* string

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LocalRoleNameInput`<sup>Optional</sup> <a name="LocalRoleNameInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.localRoleNameInput"></a>

```csharp
public string LocalRoleNameInput { get; }
```

- *Type:* string

---

##### `PortfolioIdInput`<sup>Optional</sup> <a name="PortfolioIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.portfolioIdInput"></a>

```csharp
public string PortfolioIdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LocalRoleName`<sup>Required</sup> <a name="LocalRoleName" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.localRoleName"></a>

```csharp
public string LocalRoleName { get; }
```

- *Type:* string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.portfolioId"></a>

```csharp
public string PortfolioId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogLaunchRoleConstraintConfig <a name="ServicecatalogLaunchRoleConstraintConfig" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicecatalogLaunchRoleConstraintConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PortfolioId,
    string ProductId,
    string AcceptLanguage = null,
    string Description = null,
    string LocalRoleName = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.portfolioId">PortfolioId</a></code> | <code>string</code> | The ID of the portfolio to which this launch role constraint applies. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.productId">ProductId</a></code> | <code>string</code> | The ID of the product to which this launch role constraint applies. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | The language code for the constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.description">Description</a></code> | <code>string</code> | The description of the launch role constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.localRoleName">LocalRoleName</a></code> | <code>string</code> | The local IAM role name to use in the launch constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the IAM role used for the launch constraint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.portfolioId"></a>

```csharp
public string PortfolioId { get; set; }
```

- *Type:* string

The ID of the portfolio to which this launch role constraint applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_role_constraint#portfolio_id ServicecatalogLaunchRoleConstraint#portfolio_id}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

The ID of the product to which this launch role constraint applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_role_constraint#product_id ServicecatalogLaunchRoleConstraint#product_id}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

The language code for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_role_constraint#accept_language ServicecatalogLaunchRoleConstraint#accept_language}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the launch role constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_role_constraint#description ServicecatalogLaunchRoleConstraint#description}

---

##### `LocalRoleName`<sup>Optional</sup> <a name="LocalRoleName" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.localRoleName"></a>

```csharp
public string LocalRoleName { get; set; }
```

- *Type:* string

The local IAM role name to use in the launch constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_role_constraint#local_role_name ServicecatalogLaunchRoleConstraint#local_role_name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role used for the launch constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_role_constraint#role_arn ServicecatalogLaunchRoleConstraint#role_arn}

---



