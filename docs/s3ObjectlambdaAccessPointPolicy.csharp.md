# `s3ObjectlambdaAccessPointPolicy` Submodule <a name="`s3ObjectlambdaAccessPointPolicy` Submodule" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectlambdaAccessPointPolicy <a name="S3ObjectlambdaAccessPointPolicy" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3objectlambda_access_point_policy awscc_s3objectlambda_access_point_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3ObjectlambdaAccessPointPolicy(Construct Scope, string Id, S3ObjectlambdaAccessPointPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig">S3ObjectlambdaAccessPointPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig">S3ObjectlambdaAccessPointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3ObjectlambdaAccessPointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3ObjectlambdaAccessPointPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3ObjectlambdaAccessPointPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3ObjectlambdaAccessPointPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3ObjectlambdaAccessPointPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3ObjectlambdaAccessPointPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ObjectlambdaAccessPointPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ObjectlambdaAccessPointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3objectlambda_access_point_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3ObjectlambdaAccessPointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.objectLambdaAccessPointInput">ObjectLambdaAccessPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.objectLambdaAccessPoint">ObjectLambdaAccessPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ObjectLambdaAccessPointInput`<sup>Optional</sup> <a name="ObjectLambdaAccessPointInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.objectLambdaAccessPointInput"></a>

```csharp
public string ObjectLambdaAccessPointInput { get; }
```

- *Type:* string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `ObjectLambdaAccessPoint`<sup>Required</sup> <a name="ObjectLambdaAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.objectLambdaAccessPoint"></a>

```csharp
public string ObjectLambdaAccessPoint { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectlambdaAccessPointPolicyConfig <a name="S3ObjectlambdaAccessPointPolicyConfig" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3ObjectlambdaAccessPointPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ObjectLambdaAccessPoint,
    string PolicyDocument
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.objectLambdaAccessPoint">ObjectLambdaAccessPoint</a></code> | <code>string</code> | The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ObjectLambdaAccessPoint`<sup>Required</sup> <a name="ObjectLambdaAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.objectLambdaAccessPoint"></a>

```csharp
public string ObjectLambdaAccessPoint { get; set; }
```

- *Type:* string

The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3objectlambda_access_point_policy#object_lambda_access_point S3ObjectlambdaAccessPointPolicy#object_lambda_access_point}

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPointPolicy.S3ObjectlambdaAccessPointPolicyConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

A policy document containing permissions to add to the specified ObjectLambdaAccessPoint.

For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3objectlambda_access_point_policy#policy_document S3ObjectlambdaAccessPointPolicy#policy_document}

---



