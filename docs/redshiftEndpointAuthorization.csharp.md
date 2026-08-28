# `redshiftEndpointAuthorization` Submodule <a name="`redshiftEndpointAuthorization` Submodule" id="@cdktn/provider-awscc.redshiftEndpointAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEndpointAuthorization <a name="RedshiftEndpointAuthorization" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization awscc_redshift_endpoint_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftEndpointAuthorization(Construct Scope, string Id, RedshiftEndpointAuthorizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig">RedshiftEndpointAuthorizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig">RedshiftEndpointAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds">ResetVpcIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetForce` <a name="ResetForce" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForce"></a>

```csharp
private void ResetForce()
```

##### `ResetVpcIds` <a name="ResetVpcIds" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds"></a>

```csharp
private void ResetVpcIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftEndpointAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftEndpointAuthorization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftEndpointAuthorization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftEndpointAuthorization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RedshiftEndpointAuthorization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftEndpointAuthorization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftEndpointAuthorization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftEndpointAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftEndpointAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpCs">AllowedAllVpCs</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedVpCs">AllowedVpCs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.authorizeTime">AuthorizeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterStatus">ClusterStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount">EndpointCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee">Grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor">Grantor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput">AccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceInput">ForceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput">VpcIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds">VpcIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedAllVpCs`<sup>Required</sup> <a name="AllowedAllVpCs" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpCs"></a>

```csharp
public IResolvable AllowedAllVpCs { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowedVpCs`<sup>Required</sup> <a name="AllowedVpCs" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedVpCs"></a>

```csharp
public string[] AllowedVpCs { get; }
```

- *Type:* string[]

---

##### `AuthorizeTime`<sup>Required</sup> <a name="AuthorizeTime" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.authorizeTime"></a>

```csharp
public string AuthorizeTime { get; }
```

- *Type:* string

---

##### `ClusterStatus`<sup>Required</sup> <a name="ClusterStatus" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterStatus"></a>

```csharp
public string ClusterStatus { get; }
```

- *Type:* string

---

##### `EndpointCount`<sup>Required</sup> <a name="EndpointCount" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount"></a>

```csharp
public double EndpointCount { get; }
```

- *Type:* double

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee"></a>

```csharp
public string Grantee { get; }
```

- *Type:* string

---

##### `Grantor`<sup>Required</sup> <a name="Grantor" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor"></a>

```csharp
public string Grantor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput"></a>

```csharp
public string AccountInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceInput"></a>

```csharp
public bool|IResolvable ForceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcIdsInput`<sup>Optional</sup> <a name="VpcIdsInput" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput"></a>

```csharp
public string[] VpcIdsInput { get; }
```

- *Type:* string[]

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.force"></a>

```csharp
public bool|IResolvable Force { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcIds`<sup>Required</sup> <a name="VpcIds" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds"></a>

```csharp
public string[] VpcIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEndpointAuthorizationConfig <a name="RedshiftEndpointAuthorizationConfig" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RedshiftEndpointAuthorizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Account,
    string ClusterIdentifier,
    bool|IResolvable Force = null,
    string[] VpcIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account">Account</a></code> | <code>string</code> | The target AWS account ID to grant or revoke access for. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | The cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to force the revoke action. |
| <code><a href="#@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds">VpcIds</a></code> | <code>string[]</code> | The virtual private cloud (VPC) identifiers to grant or revoke access to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

The target AWS account ID to grant or revoke access for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

The cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.force"></a>

```csharp
public bool|IResolvable Force { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to force the revoke action.

If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#force RedshiftEndpointAuthorization#force}

---

##### `VpcIds`<sup>Optional</sup> <a name="VpcIds" id="@cdktn/provider-awscc.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds"></a>

```csharp
public string[] VpcIds { get; set; }
```

- *Type:* string[]

The virtual private cloud (VPC) identifiers to grant or revoke access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}

---



