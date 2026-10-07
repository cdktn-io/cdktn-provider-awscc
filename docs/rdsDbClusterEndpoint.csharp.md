# `rdsDbClusterEndpoint` Submodule <a name="`rdsDbClusterEndpoint` Submodule" id="@cdktn/provider-awscc.rdsDbClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbClusterEndpointA <a name="RdsDbClusterEndpointA" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterEndpointA(Construct Scope, string Id, RdsDbClusterEndpointAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig">RdsDbClusterEndpointAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig">RdsDbClusterEndpointAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers">ResetExcludedMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers">ResetStaticMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags"></a>

```csharp
private void PutTags(IResolvable|RdsDbClusterEndpointTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]

---

##### `ResetExcludedMembers` <a name="ResetExcludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers"></a>

```csharp
private void ResetExcludedMembers()
```

##### `ResetStaticMembers` <a name="ResetStaticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers"></a>

```csharp
private void ResetStaticMembers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbClusterEndpointA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbClusterEndpointA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbClusterEndpointA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RdsDbClusterEndpointA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsDbClusterEndpointA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsDbClusterEndpointA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbClusterEndpointA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn">DbClusterEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier">DbClusterEndpointResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput">CustomEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput">DbClusterEndpointIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput">DbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput">ExcludedMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput">StaticMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType">CustomEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier">DbClusterEndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers">ExcludedMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers">StaticMembers</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DbClusterEndpointArn`<sup>Required</sup> <a name="DbClusterEndpointArn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn"></a>

```csharp
public string DbClusterEndpointArn { get; }
```

- *Type:* string

---

##### `DbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="DbClusterEndpointResourceIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier"></a>

```csharp
public string DbClusterEndpointResourceIdentifier { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags"></a>

```csharp
public RdsDbClusterEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a>

---

##### `CustomEndpointTypeInput`<sup>Optional</sup> <a name="CustomEndpointTypeInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput"></a>

```csharp
public string CustomEndpointTypeInput { get; }
```

- *Type:* string

---

##### `DbClusterEndpointIdentifierInput`<sup>Optional</sup> <a name="DbClusterEndpointIdentifierInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput"></a>

```csharp
public string DbClusterEndpointIdentifierInput { get; }
```

- *Type:* string

---

##### `DbClusterIdentifierInput`<sup>Optional</sup> <a name="DbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput"></a>

```csharp
public string DbClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ExcludedMembersInput`<sup>Optional</sup> <a name="ExcludedMembersInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput"></a>

```csharp
public string[] ExcludedMembersInput { get; }
```

- *Type:* string[]

---

##### `StaticMembersInput`<sup>Optional</sup> <a name="StaticMembersInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput"></a>

```csharp
public string[] StaticMembersInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput"></a>

```csharp
public IResolvable|RdsDbClusterEndpointTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]

---

##### `CustomEndpointType`<sup>Required</sup> <a name="CustomEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType"></a>

```csharp
public string CustomEndpointType { get; }
```

- *Type:* string

---

##### `DbClusterEndpointIdentifier`<sup>Required</sup> <a name="DbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier"></a>

```csharp
public string DbClusterEndpointIdentifier { get; }
```

- *Type:* string

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; }
```

- *Type:* string

---

##### `ExcludedMembers`<sup>Required</sup> <a name="ExcludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers"></a>

```csharp
public string[] ExcludedMembers { get; }
```

- *Type:* string[]

---

##### `StaticMembers`<sup>Required</sup> <a name="StaticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers"></a>

```csharp
public string[] StaticMembers { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterEndpointAConfig <a name="RdsDbClusterEndpointAConfig" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterEndpointAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CustomEndpointType,
    string DbClusterEndpointIdentifier,
    string DbClusterIdentifier,
    string[] ExcludedMembers = null,
    string[] StaticMembers = null,
    IResolvable|RdsDbClusterEndpointTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType">CustomEndpointType</a></code> | <code>string</code> | The type of the custom endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier">DbClusterEndpointIdentifier</a></code> | <code>string</code> | The identifier to use for the new endpoint. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier">DbClusterIdentifier</a></code> | <code>string</code> | The DB cluster identifier of the DB cluster associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers">ExcludedMembers</a></code> | <code>string[]</code> | List of DB instance identifiers that aren't part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers">StaticMembers</a></code> | <code>string[]</code> | List of DB instance identifiers that are part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]</code> | The tags to be assigned to the DB cluster endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomEndpointType`<sup>Required</sup> <a name="CustomEndpointType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType"></a>

```csharp
public string CustomEndpointType { get; set; }
```

- *Type:* string

The type of the custom endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#custom_endpoint_type RdsDbClusterEndpointA#custom_endpoint_type}

---

##### `DbClusterEndpointIdentifier`<sup>Required</sup> <a name="DbClusterEndpointIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier"></a>

```csharp
public string DbClusterEndpointIdentifier { get; set; }
```

- *Type:* string

The identifier to use for the new endpoint. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_endpoint_identifier RdsDbClusterEndpointA#db_cluster_endpoint_identifier}

---

##### `DbClusterIdentifier`<sup>Required</sup> <a name="DbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier"></a>

```csharp
public string DbClusterIdentifier { get; set; }
```

- *Type:* string

The DB cluster identifier of the DB cluster associated with the endpoint.

This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_identifier RdsDbClusterEndpointA#db_cluster_identifier}

---

##### `ExcludedMembers`<sup>Optional</sup> <a name="ExcludedMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers"></a>

```csharp
public string[] ExcludedMembers { get; set; }
```

- *Type:* string[]

List of DB instance identifiers that aren't part of the custom endpoint group.

All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#excluded_members RdsDbClusterEndpointA#excluded_members}

---

##### `StaticMembers`<sup>Optional</sup> <a name="StaticMembers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers"></a>

```csharp
public string[] StaticMembers { get; set; }
```

- *Type:* string[]

List of DB instance identifiers that are part of the custom endpoint group.

Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#static_members RdsDbClusterEndpointA#static_members}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags"></a>

```csharp
public IResolvable|RdsDbClusterEndpointTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]

The tags to be assigned to the DB cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#tags RdsDbClusterEndpointA#tags}

---

### RdsDbClusterEndpointTags <a name="RdsDbClusterEndpointTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterEndpointTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#key RdsDbClusterEndpointA#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#value RdsDbClusterEndpointA#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterEndpointTagsList <a name="RdsDbClusterEndpointTagsList" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get"></a>

```csharp
private RdsDbClusterEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterEndpointTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>[]

---


### RdsDbClusterEndpointTagsOutputReference <a name="RdsDbClusterEndpointTagsOutputReference" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RdsDbClusterEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RdsDbClusterEndpointTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>

---



