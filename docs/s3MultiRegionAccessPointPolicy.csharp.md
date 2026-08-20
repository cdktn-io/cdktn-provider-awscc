# `s3MultiRegionAccessPointPolicy` Submodule <a name="`s3MultiRegionAccessPointPolicy` Submodule" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3MultiRegionAccessPointPolicy <a name="S3MultiRegionAccessPointPolicy" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_multi_region_access_point_policy awscc_s3_multi_region_access_point_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointPolicy(Construct Scope, string Id, S3MultiRegionAccessPointPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig">S3MultiRegionAccessPointPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig">S3MultiRegionAccessPointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3MultiRegionAccessPointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3MultiRegionAccessPointPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3MultiRegionAccessPointPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3MultiRegionAccessPointPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3MultiRegionAccessPointPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3MultiRegionAccessPointPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3MultiRegionAccessPointPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3MultiRegionAccessPointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_multi_region_access_point_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3MultiRegionAccessPointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policyStatus">PolicyStatus</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference">S3MultiRegionAccessPointPolicyPolicyStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.mrapNameInput">MrapNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.mrapName">MrapName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyStatus`<sup>Required</sup> <a name="PolicyStatus" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policyStatus"></a>

```csharp
public S3MultiRegionAccessPointPolicyPolicyStatusOutputReference PolicyStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference">S3MultiRegionAccessPointPolicyPolicyStatusOutputReference</a>

---

##### `MrapNameInput`<sup>Optional</sup> <a name="MrapNameInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.mrapNameInput"></a>

```csharp
public string MrapNameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `MrapName`<sup>Required</sup> <a name="MrapName" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.mrapName"></a>

```csharp
public string MrapName { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3MultiRegionAccessPointPolicyConfig <a name="S3MultiRegionAccessPointPolicyConfig" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MrapName,
    string Policy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.mrapName">MrapName</a></code> | <code>string</code> | The name of the Multi Region Access Point to apply policy. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.policy">Policy</a></code> | <code>string</code> | Policy document to apply to a Multi Region Access Point. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MrapName`<sup>Required</sup> <a name="MrapName" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.mrapName"></a>

```csharp
public string MrapName { get; set; }
```

- *Type:* string

The name of the Multi Region Access Point to apply policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_multi_region_access_point_policy#mrap_name S3MultiRegionAccessPointPolicy#mrap_name}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Policy document to apply to a Multi Region Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3_multi_region_access_point_policy#policy S3MultiRegionAccessPointPolicy#policy}

---

### S3MultiRegionAccessPointPolicyPolicyStatus <a name="S3MultiRegionAccessPointPolicyPolicyStatus" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointPolicyPolicyStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### S3MultiRegionAccessPointPolicyPolicyStatusOutputReference <a name="S3MultiRegionAccessPointPolicyPolicyStatusOutputReference" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3MultiRegionAccessPointPolicyPolicyStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.isPublic">IsPublic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus">S3MultiRegionAccessPointPolicyPolicyStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.isPublic"></a>

```csharp
public string IsPublic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.internalValue"></a>

```csharp
public S3MultiRegionAccessPointPolicyPolicyStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3MultiRegionAccessPointPolicy.S3MultiRegionAccessPointPolicyPolicyStatus">S3MultiRegionAccessPointPolicyPolicyStatus</a>

---



