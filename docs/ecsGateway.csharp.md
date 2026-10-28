# `ecsGateway` Submodule <a name="`ecsGateway` Submodule" id="@cdktn/provider-awscc.ecsGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsGateway <a name="EcsGateway" id="@cdktn/provider-awscc.ecsGateway.EcsGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway awscc_ecs_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGateway(Construct Scope, string Id, EcsGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig">EcsGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig">EcsGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.putConfiguration"></a>

```csharp
private void PutConfiguration(EcsGatewayConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.putTags"></a>

```csharp
private void PutTags(IResolvable|EcsGatewayTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>[]

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.resetPropagateTags"></a>

```csharp
private void ResetPropagateTags()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcsGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcsGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcsGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference">EcsGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList">EcsGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.gatewayNameInput">GatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.infrastructureRoleArnInput">InfrastructureRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.gatewayName">GatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.propagateTags">PropagateTags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.configuration"></a>

```csharp
public EcsGatewayConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference">EcsGatewayConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tags"></a>

```csharp
public EcsGatewayTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList">EcsGatewayTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.configurationInput"></a>

```csharp
public IResolvable|EcsGatewayConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.gatewayNameInput"></a>

```csharp
public string GatewayNameInput { get; }
```

- *Type:* string

---

##### `InfrastructureRoleArnInput`<sup>Optional</sup> <a name="InfrastructureRoleArnInput" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.infrastructureRoleArnInput"></a>

```csharp
public string InfrastructureRoleArnInput { get; }
```

- *Type:* string

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.propagateTagsInput"></a>

```csharp
public string PropagateTagsInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tagsInput"></a>

```csharp
public IResolvable|EcsGatewayTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>[]

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.gatewayName"></a>

```csharp
public string GatewayName { get; }
```

- *Type:* string

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.infrastructureRoleArn"></a>

```csharp
public string InfrastructureRoleArn { get; }
```

- *Type:* string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.propagateTags"></a>

```csharp
public string PropagateTags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecsGateway.EcsGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsGatewayConfig <a name="EcsGatewayConfig" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    EcsGatewayConfiguration Configuration,
    string GatewayName,
    string InfrastructureRoleArn,
    bool|IResolvable DeletionProtection = null,
    string PropagateTags = null,
    IResolvable|EcsGatewayTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a></code> | The configuration for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.gatewayName">GatewayName</a></code> | <code>string</code> | The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that ECS uses to manage infrastructure for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether deletion protection is enabled for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.propagateTags">PropagateTags</a></code> | <code>string</code> | Specifies whether to propagate the tags from the gateway to other resources. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>[]</code> | The metadata that you apply to the gateway to help you categorize and organize them. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.configuration"></a>

```csharp
public EcsGatewayConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a>

The configuration for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#configuration EcsGateway#configuration}

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.gatewayName"></a>

```csharp
public string GatewayName { get; set; }
```

- *Type:* string

The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#gateway_name EcsGateway#gateway_name}

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.infrastructureRoleArn"></a>

```csharp
public string InfrastructureRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that ECS uses to manage infrastructure for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#infrastructure_role_arn EcsGateway#infrastructure_role_arn}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether deletion protection is enabled for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#deletion_protection EcsGateway#deletion_protection}

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.propagateTags"></a>

```csharp
public string PropagateTags { get; set; }
```

- *Type:* string

Specifies whether to propagate the tags from the gateway to other resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#propagate_tags EcsGateway#propagate_tags}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfig.property.tags"></a>

```csharp
public IResolvable|EcsGatewayTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>[]

The metadata that you apply to the gateway to help you categorize and organize them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#tags EcsGateway#tags}

---

### EcsGatewayConfiguration <a name="EcsGatewayConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfiguration {
    EcsGatewayConfigurationHostSharedAlb HostSharedAlb
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration.property.hostSharedAlb">HostSharedAlb</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a></code> | The host shared ALB configuration for the gateway. |

---

##### `HostSharedAlb`<sup>Required</sup> <a name="HostSharedAlb" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration.property.hostSharedAlb"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlb HostSharedAlb { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a>

The host shared ALB configuration for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#host_shared_alb EcsGateway#host_shared_alb}

---

### EcsGatewayConfigurationHostSharedAlb <a name="EcsGatewayConfigurationHostSharedAlb" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlb {
    EcsGatewayConfigurationHostSharedAlbAccessLogs AccessLogs = null,
    string HttpDesync = null,
    double MaxAlbCount = null,
    EcsGatewayConfigurationHostSharedAlbNetworkConfiguration NetworkConfiguration = null,
    double Port = null,
    string Protocol = null,
    string Scheme = null,
    EcsGatewayConfigurationHostSharedAlbTestTrafficRules TestTrafficRules = null,
    string WebAclArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.accessLogs">AccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | The access log configuration for the gateway ALB. Access logging is enabled by the presence of a destination. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.httpDesync">HttpDesync</a></code> | <code>string</code> | The HTTP desync mitigation mode for the ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.maxAlbCount">MaxAlbCount</a></code> | <code>double</code> | The maximum number of ALBs to provision for the gateway. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | The network configuration for the gateway ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.port">Port</a></code> | <code>double</code> | The port on which the ALB listens. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.protocol">Protocol</a></code> | <code>string</code> | The protocol for the ALB listener. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.scheme">Scheme</a></code> | <code>string</code> | The scheme for the ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.testTrafficRules">TestTrafficRules</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | The test traffic rules for the gateway ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.webAclArn">WebAclArn</a></code> | <code>string</code> | The ARN of the WAFv2 web ACL to associate with the ALB. |

---

##### `AccessLogs`<sup>Optional</sup> <a name="AccessLogs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.accessLogs"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbAccessLogs AccessLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a>

The access log configuration for the gateway ALB. Access logging is enabled by the presence of a destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#access_logs EcsGateway#access_logs}

---

##### `HttpDesync`<sup>Optional</sup> <a name="HttpDesync" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.httpDesync"></a>

```csharp
public string HttpDesync { get; set; }
```

- *Type:* string

The HTTP desync mitigation mode for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#http_desync EcsGateway#http_desync}

---

##### `MaxAlbCount`<sup>Optional</sup> <a name="MaxAlbCount" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.maxAlbCount"></a>

```csharp
public double MaxAlbCount { get; set; }
```

- *Type:* double

The maximum number of ALBs to provision for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#max_alb_count EcsGateway#max_alb_count}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.networkConfiguration"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

The network configuration for the gateway ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#network_configuration EcsGateway#network_configuration}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port on which the ALB listens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#port EcsGateway#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The protocol for the ALB listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#protocol EcsGateway#protocol}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

The scheme for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#scheme EcsGateway#scheme}

---

##### `TestTrafficRules`<sup>Optional</sup> <a name="TestTrafficRules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.testTrafficRules"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbTestTrafficRules TestTrafficRules { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

The test traffic rules for the gateway ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#test_traffic_rules EcsGateway#test_traffic_rules}

---

##### `WebAclArn`<sup>Optional</sup> <a name="WebAclArn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb.property.webAclArn"></a>

```csharp
public string WebAclArn { get; set; }
```

- *Type:* string

The ARN of the WAFv2 web ACL to associate with the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#web_acl_arn EcsGateway#web_acl_arn}

---

### EcsGatewayConfigurationHostSharedAlbAccessLogs <a name="EcsGatewayConfigurationHostSharedAlbAccessLogs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbAccessLogs {
    EcsGatewayConfigurationHostSharedAlbAccessLogsDestination Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | The destination for gateway ALB access logs. Exactly one destination type must be specified. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs.property.destination"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbAccessLogsDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

The destination for gateway ALB access logs. Exactly one destination type must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#destination EcsGateway#destination}

---

### EcsGatewayConfigurationHostSharedAlbAccessLogsDestination <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsDestination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbAccessLogsDestination {
    EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | The S3 destination for gateway ALB access logs. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination.property.s3"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

The S3 destination for gateway ALB access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#s3 EcsGateway#s3}

---

### EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 {
    string Bucket = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.property.bucket">Bucket</a></code> | <code>string</code> | The S3 bucket for access logs. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.property.prefix">Prefix</a></code> | <code>string</code> | The S3 prefix for access logs. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The S3 bucket for access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#bucket EcsGateway#bucket}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The S3 prefix for access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#prefix EcsGateway#prefix}

---

### EcsGatewayConfigurationHostSharedAlbNetworkConfiguration <a name="EcsGatewayConfigurationHostSharedAlbNetworkConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbNetworkConfiguration {
    string InboundSecurityGroup = null,
    string IpAddressType = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.inboundSecurityGroup">InboundSecurityGroup</a></code> | <code>string</code> | The inbound security group for the ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | The IP address type for the ALB. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.subnets">Subnets</a></code> | <code>string[]</code> | The subnets for the ALB. |

---

##### `InboundSecurityGroup`<sup>Optional</sup> <a name="InboundSecurityGroup" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.inboundSecurityGroup"></a>

```csharp
public string InboundSecurityGroup { get; set; }
```

- *Type:* string

The inbound security group for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#inbound_security_group EcsGateway#inbound_security_group}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

The IP address type for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#ip_address_type EcsGateway#ip_address_type}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The subnets for the ALB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#subnets EcsGateway#subnets}

---

### EcsGatewayConfigurationHostSharedAlbTestTrafficRules <a name="EcsGatewayConfigurationHostSharedAlbTestTrafficRules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbTestTrafficRules {
    EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader Header = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | The header configuration for test traffic routing. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules.property.header"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader Header { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

The header configuration for test traffic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#header EcsGateway#header}

---

### EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader <a name="EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader {
    string Name = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.property.name">Name</a></code> | <code>string</code> | The name of the header. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.property.values">Values</a></code> | <code>string[]</code> | The values for the header. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#name EcsGateway#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The values for the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#values EcsGateway#values}

---

### EcsGatewayTags <a name="EcsGatewayTags" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#key EcsGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#value EcsGateway#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#key EcsGateway#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ecs_gateway#value EcsGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.putS3"></a>

```csharp
private void PutS3(EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

---

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3Input"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbAccessLogsDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

---


### EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

---


### EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference <a name="EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.putDestination"></a>

```csharp
private void PutDestination(EcsGatewayConfigurationHostSharedAlbAccessLogsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destinationInput"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbAccessLogsDestination DestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsDestination">EcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbAccessLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a>

---


### EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference <a name="EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetInboundSecurityGroup">ResetInboundSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInboundSecurityGroup` <a name="ResetInboundSecurityGroup" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetInboundSecurityGroup"></a>

```csharp
private void ResetInboundSecurityGroup()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroupInput">InboundSecurityGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup">InboundSecurityGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InboundSecurityGroupInput`<sup>Optional</sup> <a name="InboundSecurityGroupInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroupInput"></a>

```csharp
public string InboundSecurityGroupInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `InboundSecurityGroup`<sup>Required</sup> <a name="InboundSecurityGroup" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup"></a>

```csharp
public string InboundSecurityGroup { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

---


### EcsGatewayConfigurationHostSharedAlbOutputReference <a name="EcsGatewayConfigurationHostSharedAlbOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putAccessLogs">PutAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putTestTrafficRules">PutTestTrafficRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetAccessLogs">ResetAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetHttpDesync">ResetHttpDesync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetMaxAlbCount">ResetMaxAlbCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetTestTrafficRules">ResetTestTrafficRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetWebAclArn">ResetWebAclArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessLogs` <a name="PutAccessLogs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putAccessLogs"></a>

```csharp
private void PutAccessLogs(EcsGatewayConfigurationHostSharedAlbAccessLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(EcsGatewayConfigurationHostSharedAlbNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

---

##### `PutTestTrafficRules` <a name="PutTestTrafficRules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putTestTrafficRules"></a>

```csharp
private void PutTestTrafficRules(EcsGatewayConfigurationHostSharedAlbTestTrafficRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.putTestTrafficRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

---

##### `ResetAccessLogs` <a name="ResetAccessLogs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetAccessLogs"></a>

```csharp
private void ResetAccessLogs()
```

##### `ResetHttpDesync` <a name="ResetHttpDesync" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetHttpDesync"></a>

```csharp
private void ResetHttpDesync()
```

##### `ResetMaxAlbCount` <a name="ResetMaxAlbCount" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetMaxAlbCount"></a>

```csharp
private void ResetMaxAlbCount()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```

##### `ResetTestTrafficRules` <a name="ResetTestTrafficRules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetTestTrafficRules"></a>

```csharp
private void ResetTestTrafficRules()
```

##### `ResetWebAclArn` <a name="ResetWebAclArn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.resetWebAclArn"></a>

```csharp
private void ResetWebAclArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs">AccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount">CurrentAlbCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules">TestTrafficRules</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogsInput">AccessLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesyncInput">HttpDesyncInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCountInput">MaxAlbCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRulesInput">TestTrafficRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArnInput">WebAclArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync">HttpDesync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount">MaxAlbCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn">WebAclArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLogs`<sup>Required</sup> <a name="AccessLogs" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference AccessLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">EcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a>

---

##### `CurrentAlbCount`<sup>Required</sup> <a name="CurrentAlbCount" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount"></a>

```csharp
public double CurrentAlbCount { get; }
```

- *Type:* double

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">EcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a>

---

##### `TestTrafficRules`<sup>Required</sup> <a name="TestTrafficRules" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference TestTrafficRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a>

---

##### `AccessLogsInput`<sup>Optional</sup> <a name="AccessLogsInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogsInput"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbAccessLogs AccessLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbAccessLogs">EcsGatewayConfigurationHostSharedAlbAccessLogs</a>

---

##### `HttpDesyncInput`<sup>Optional</sup> <a name="HttpDesyncInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesyncInput"></a>

```csharp
public string HttpDesyncInput { get; }
```

- *Type:* string

---

##### `MaxAlbCountInput`<sup>Optional</sup> <a name="MaxAlbCountInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCountInput"></a>

```csharp
public double MaxAlbCountInput { get; }
```

- *Type:* double

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfigurationInput"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbNetworkConfiguration">EcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `TestTrafficRulesInput`<sup>Optional</sup> <a name="TestTrafficRulesInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRulesInput"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbTestTrafficRules TestTrafficRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

---

##### `WebAclArnInput`<sup>Optional</sup> <a name="WebAclArnInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArnInput"></a>

```csharp
public string WebAclArnInput { get; }
```

- *Type:* string

---

##### `HttpDesync`<sup>Required</sup> <a name="HttpDesync" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync"></a>

```csharp
public string HttpDesync { get; }
```

- *Type:* string

---

##### `MaxAlbCount`<sup>Required</sup> <a name="MaxAlbCount" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount"></a>

```csharp
public double MaxAlbCount { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `WebAclArn`<sup>Required</sup> <a name="WebAclArn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn"></a>

```csharp
public string WebAclArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlb InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a>

---


### EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference <a name="EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

---


### EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference <a name="EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.putHeader"></a>

```csharp
private void PutHeader(EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

---

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.headerInput">HeaderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference Header { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.headerInput"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader HeaderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">EcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlbTestTrafficRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbTestTrafficRules">EcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

---


### EcsGatewayConfigurationOutputReference <a name="EcsGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb">PutHostSharedAlb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostSharedAlb` <a name="PutHostSharedAlb" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb"></a>

```csharp
private void PutHostSharedAlb(EcsGatewayConfigurationHostSharedAlb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.putHostSharedAlb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.hostSharedAlb">HostSharedAlb</a></code> | <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference">EcsGatewayConfigurationHostSharedAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.hostSharedAlbInput">HostSharedAlbInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostSharedAlb`<sup>Required</sup> <a name="HostSharedAlb" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.hostSharedAlb"></a>

```csharp
public EcsGatewayConfigurationHostSharedAlbOutputReference HostSharedAlb { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlbOutputReference">EcsGatewayConfigurationHostSharedAlbOutputReference</a>

---

##### `HostSharedAlbInput`<sup>Optional</sup> <a name="HostSharedAlbInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.hostSharedAlbInput"></a>

```csharp
public IResolvable|EcsGatewayConfigurationHostSharedAlb HostSharedAlbInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationHostSharedAlb">EcsGatewayConfigurationHostSharedAlb</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayConfiguration">EcsGatewayConfiguration</a>

---


### EcsGatewayTagsList <a name="EcsGatewayTagsList" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.get"></a>

```csharp
private EcsGatewayTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsList.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>[]

---


### EcsGatewayTagsOutputReference <a name="EcsGatewayTagsOutputReference" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsGatewayTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsGateway.EcsGatewayTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsGatewayTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsGateway.EcsGatewayTags">EcsGatewayTags</a>

---



