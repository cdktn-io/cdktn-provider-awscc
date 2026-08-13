# `lambdaLayerVersionPermission` Submodule <a name="`lambdaLayerVersionPermission` Submodule" id="@cdktn/provider-awscc.lambdaLayerVersionPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersionPermission <a name="LambdaLayerVersionPermission" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_layer_version_permission awscc_lambda_layer_version_permission}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaLayerVersionPermission(Construct Scope, string Id, LambdaLayerVersionPermissionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig">LambdaLayerVersionPermissionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig">LambdaLayerVersionPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaLayerVersionPermission resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaLayerVersionPermission.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaLayerVersionPermission.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaLayerVersionPermission.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LambdaLayerVersionPermission.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaLayerVersionPermission resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaLayerVersionPermission to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaLayerVersionPermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_layer_version_permission#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaLayerVersionPermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerVersionPermissionId">LayerVersionPermissionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerVersionArnInput">LayerVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerVersionArn">LayerVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principal">Principal</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LayerVersionPermissionId`<sup>Required</sup> <a name="LayerVersionPermissionId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerVersionPermissionId"></a>

```csharp
public string LayerVersionPermissionId { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `LayerVersionArnInput`<sup>Optional</sup> <a name="LayerVersionArnInput" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerVersionArnInput"></a>

```csharp
public string LayerVersionArnInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `LayerVersionArn`<sup>Required</sup> <a name="LayerVersionArn" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.layerVersionArn"></a>

```csharp
public string LayerVersionArn { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermission.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionPermissionConfig <a name="LambdaLayerVersionPermissionConfig" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LambdaLayerVersionPermissionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Action,
    string LayerVersionArn,
    string Principal,
    string OrganizationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.action">Action</a></code> | <code>string</code> | The API action that grants access to the layer. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.layerVersionArn">LayerVersionArn</a></code> | <code>string</code> | The name or Amazon Resource Name (ARN) of the layer. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.principal">Principal</a></code> | <code>string</code> | An account ID, or * to grant layer usage permission to all accounts in an organization, or all AWS accounts (if organizationId is not specified). |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | With the principal set to *, grant permission to all accounts in the specified organization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The API action that grants access to the layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_layer_version_permission#action LambdaLayerVersionPermission#action}

---

##### `LayerVersionArn`<sup>Required</sup> <a name="LayerVersionArn" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.layerVersionArn"></a>

```csharp
public string LayerVersionArn { get; set; }
```

- *Type:* string

The name or Amazon Resource Name (ARN) of the layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_layer_version_permission#layer_version_arn LambdaLayerVersionPermission#layer_version_arn}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

An account ID, or * to grant layer usage permission to all accounts in an organization, or all AWS accounts (if organizationId is not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_layer_version_permission#principal LambdaLayerVersionPermission#principal}

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktn/provider-awscc.lambdaLayerVersionPermission.LambdaLayerVersionPermissionConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

With the principal set to *, grant permission to all accounts in the specified organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_layer_version_permission#organization_id LambdaLayerVersionPermission#organization_id}

---



