# `pcsCluster` Submodule <a name="`pcsCluster` Submodule" id="@cdktn/provider-awscc.pcsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcsCluster <a name="PcsCluster" id="@cdktn/provider-awscc.pcsCluster.PcsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster awscc_pcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsCluster(Construct Scope, string Id, PcsClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig">PcsClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig">PcsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler">PutScheduler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration">PutSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetSlurmConfiguration">ResetSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking"></a>

```csharp
private void PutNetworking(PcsClusterNetworking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

---

##### `PutScheduler` <a name="PutScheduler" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler"></a>

```csharp
private void PutScheduler(PcsClusterScheduler Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

---

##### `PutSlurmConfiguration` <a name="PutSlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration"></a>

```csharp
private void PutSlurmConfiguration(PcsClusterSlurmConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSlurmConfiguration` <a name="ResetSlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetSlurmConfiguration"></a>

```csharp
private void ResetSlurmConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PcsCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcsCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcsCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcsCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcsCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PcsCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcsCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PcsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList">PcsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList">PcsClusterErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networking">Networking</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference">PcsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.scheduler">Scheduler</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference">PcsClusterSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfiguration">SlurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference">PcsClusterSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networkingInput">NetworkingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.schedulerInput">SchedulerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfigurationInput">SlurmConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.endpoints"></a>

```csharp
public PcsClusterEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList">PcsClusterEndpointsList</a>

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.errorInfo"></a>

```csharp
public PcsClusterErrorInfoList ErrorInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList">PcsClusterErrorInfoList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networking"></a>

```csharp
public PcsClusterNetworkingOutputReference Networking { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference">PcsClusterNetworkingOutputReference</a>

---

##### `Scheduler`<sup>Required</sup> <a name="Scheduler" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.scheduler"></a>

```csharp
public PcsClusterSchedulerOutputReference Scheduler { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference">PcsClusterSchedulerOutputReference</a>

---

##### `SlurmConfiguration`<sup>Required</sup> <a name="SlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfiguration"></a>

```csharp
public PcsClusterSlurmConfigurationOutputReference SlurmConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference">PcsClusterSlurmConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networkingInput"></a>

```csharp
public IResolvable|PcsClusterNetworking NetworkingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

---

##### `SchedulerInput`<sup>Optional</sup> <a name="SchedulerInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.schedulerInput"></a>

```csharp
public IResolvable|PcsClusterScheduler SchedulerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `SlurmConfigurationInput`<sup>Optional</sup> <a name="SlurmConfigurationInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfigurationInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfiguration SlurmConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcsClusterConfig <a name="PcsClusterConfig" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    PcsClusterNetworking Networking,
    PcsClusterScheduler Scheduler,
    string Size,
    string Name = null,
    PcsClusterSlurmConfiguration SlurmConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.networking">Networking</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | The networking configuration for the cluster's control plane. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.scheduler">Scheduler</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | The cluster management and job scheduling software associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.size">Size</a></code> | <code>string</code> | The size of the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.name">Name</a></code> | <code>string</code> | The name that identifies the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.slurmConfiguration">SlurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | Additional options related to the Slurm scheduler. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | 1 or more tags added to the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.networking"></a>

```csharp
public PcsClusterNetworking Networking { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

The networking configuration for the cluster's control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#networking PcsCluster#networking}

---

##### `Scheduler`<sup>Required</sup> <a name="Scheduler" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.scheduler"></a>

```csharp
public PcsClusterScheduler Scheduler { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

The cluster management and job scheduling software associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#scheduler PcsCluster#scheduler}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

The size of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#size PcsCluster#size}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name that identifies the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#name PcsCluster#name}

---

##### `SlurmConfiguration`<sup>Optional</sup> <a name="SlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.slurmConfiguration"></a>

```csharp
public PcsClusterSlurmConfiguration SlurmConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

Additional options related to the Slurm scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#slurm_configuration PcsCluster#slurm_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

1 or more tags added to the resource.

Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#tags PcsCluster#tags}

---

### PcsClusterEndpoints <a name="PcsClusterEndpoints" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterEndpoints {

};
```


### PcsClusterErrorInfo <a name="PcsClusterErrorInfo" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterErrorInfo {

};
```


### PcsClusterNetworking <a name="PcsClusterNetworking" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterNetworking {
    string NetworkType = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.networkType">NetworkType</a></code> | <code>string</code> | The IP of the cluster (IPV4 or IPV6). |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. |

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

The IP of the cluster (IPV4 or IPV6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#network_type PcsCluster#network_type}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#security_group_ids PcsCluster#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources.

The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#subnet_ids PcsCluster#subnet_ids}

---

### PcsClusterScheduler <a name="PcsClusterScheduler" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterScheduler {
    string Type,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.type">Type</a></code> | <code>string</code> | The software AWS PCS uses to manage cluster scaling and job scheduling. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.version">Version</a></code> | <code>string</code> | The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The software AWS PCS uses to manage cluster scaling and job scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#type PcsCluster#type}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#version PcsCluster#version}

---

### PcsClusterSlurmConfiguration <a name="PcsClusterSlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfiguration {
    PcsClusterSlurmConfigurationAccounting Accounting = null,
    PcsClusterSlurmConfigurationAuthKey AuthKey = null,
    IResolvable|PcsClusterSlurmConfigurationCgroupCustomSettings[] CgroupCustomSettings = null,
    PcsClusterSlurmConfigurationJwtAuth JwtAuth = null,
    double ScaleDownIdleTimeInSeconds = null,
    IResolvable|PcsClusterSlurmConfigurationSlurmCustomSettings[] SlurmCustomSettings = null,
    IResolvable|PcsClusterSlurmConfigurationSlurmdbdCustomSettings[] SlurmdbdCustomSettings = null,
    PcsClusterSlurmConfigurationSlurmRest SlurmRest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.accounting">Accounting</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | The accounting configuration includes configurable settings for Slurm accounting. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.authKey">AuthKey</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | The shared Slurm key for authentication, also known as the cluster secret. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.cgroupCustomSettings">CgroupCustomSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]</code> | Additional cgroup-specific configuration that directly maps to cgroup.conf settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.jwtAuth">JwtAuth</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | JWT authentication configuration for Slurm. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.scaleDownIdleTimeInSeconds">ScaleDownIdleTimeInSeconds</a></code> | <code>double</code> | The time before an idle node is scaled down. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmCustomSettings">SlurmCustomSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]</code> | Additional Slurm-specific configuration that directly maps to Slurm settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmdbdCustomSettings">SlurmdbdCustomSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]</code> | Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmRest">SlurmRest</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | The SlurmRest configuration includes configurable settings for Slurm Rest. |

---

##### `Accounting`<sup>Optional</sup> <a name="Accounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.accounting"></a>

```csharp
public PcsClusterSlurmConfigurationAccounting Accounting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

The accounting configuration includes configurable settings for Slurm accounting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#accounting PcsCluster#accounting}

---

##### `AuthKey`<sup>Optional</sup> <a name="AuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.authKey"></a>

```csharp
public PcsClusterSlurmConfigurationAuthKey AuthKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

The shared Slurm key for authentication, also known as the cluster secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#auth_key PcsCluster#auth_key}

---

##### `CgroupCustomSettings`<sup>Optional</sup> <a name="CgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.cgroupCustomSettings"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationCgroupCustomSettings[] CgroupCustomSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]

Additional cgroup-specific configuration that directly maps to cgroup.conf settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#cgroup_custom_settings PcsCluster#cgroup_custom_settings}

---

##### `JwtAuth`<sup>Optional</sup> <a name="JwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.jwtAuth"></a>

```csharp
public PcsClusterSlurmConfigurationJwtAuth JwtAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

JWT authentication configuration for Slurm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#jwt_auth PcsCluster#jwt_auth}

---

##### `ScaleDownIdleTimeInSeconds`<sup>Optional</sup> <a name="ScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.scaleDownIdleTimeInSeconds"></a>

```csharp
public double ScaleDownIdleTimeInSeconds { get; set; }
```

- *Type:* double

The time before an idle node is scaled down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#scale_down_idle_time_in_seconds PcsCluster#scale_down_idle_time_in_seconds}

---

##### `SlurmCustomSettings`<sup>Optional</sup> <a name="SlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmCustomSettings"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmCustomSettings[] SlurmCustomSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]

Additional Slurm-specific configuration that directly maps to Slurm settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#slurm_custom_settings PcsCluster#slurm_custom_settings}

---

##### `SlurmdbdCustomSettings`<sup>Optional</sup> <a name="SlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmdbdCustomSettings"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmdbdCustomSettings[] SlurmdbdCustomSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]

Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#slurmdbd_custom_settings PcsCluster#slurmdbd_custom_settings}

---

##### `SlurmRest`<sup>Optional</sup> <a name="SlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmRest"></a>

```csharp
public PcsClusterSlurmConfigurationSlurmRest SlurmRest { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

The SlurmRest configuration includes configurable settings for Slurm Rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#slurm_rest PcsCluster#slurm_rest}

---

### PcsClusterSlurmConfigurationAccounting <a name="PcsClusterSlurmConfigurationAccounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationAccounting {
    double DefaultPurgeTimeInDays = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.defaultPurgeTimeInDays">DefaultPurgeTimeInDays</a></code> | <code>double</code> | The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.mode">Mode</a></code> | <code>string</code> | The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled. |

---

##### `DefaultPurgeTimeInDays`<sup>Optional</sup> <a name="DefaultPurgeTimeInDays" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.defaultPurgeTimeInDays"></a>

```csharp
public double DefaultPurgeTimeInDays { get; set; }
```

- *Type:* double

The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#default_purge_time_in_days PcsCluster#default_purge_time_in_days}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#mode PcsCluster#mode}

---

### PcsClusterSlurmConfigurationAuthKey <a name="PcsClusterSlurmConfigurationAuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationAuthKey {
    string SecretArn = null,
    string SecretVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretArn">SecretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the the shared Slurm key. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The version of the shared Slurm key. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the the shared Slurm key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The version of the shared Slurm key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}

---

### PcsClusterSlurmConfigurationCgroupCustomSettings <a name="PcsClusterSlurmConfigurationCgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationCgroupCustomSettings {
    string ParameterName = null,
    string ParameterValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterName">ParameterName</a></code> | <code>string</code> | The cgroup.conf parameter name. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterValue">ParameterValue</a></code> | <code>string</code> | The value for the cgroup.conf parameter. |

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

The cgroup.conf parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterValue"></a>

```csharp
public string ParameterValue { get; set; }
```

- *Type:* string

The value for the cgroup.conf parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationJwtAuth <a name="PcsClusterSlurmConfigurationJwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationJwtAuth {
    PcsClusterSlurmConfigurationJwtAuthJwtKey JwtKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.property.jwtKey">JwtKey</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | JWT key configuration. |

---

##### `JwtKey`<sup>Optional</sup> <a name="JwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.property.jwtKey"></a>

```csharp
public PcsClusterSlurmConfigurationJwtAuthJwtKey JwtKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

JWT key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#jwt_key PcsCluster#jwt_key}

---

### PcsClusterSlurmConfigurationJwtAuthJwtKey <a name="PcsClusterSlurmConfigurationJwtAuthJwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationJwtAuthJwtKey {
    string SecretArn = null,
    string SecretVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretArn">SecretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the JWT key secret. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The version of the JWT key secret. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the JWT key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The version of the JWT key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}

---

### PcsClusterSlurmConfigurationSlurmCustomSettings <a name="PcsClusterSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationSlurmCustomSettings {
    string ParameterName = null,
    string ParameterValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterName">ParameterName</a></code> | <code>string</code> | AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterValue">ParameterValue</a></code> | <code>string</code> | The value for the configured Slurm setting. |

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterValue"></a>

```csharp
public string ParameterValue { get; set; }
```

- *Type:* string

The value for the configured Slurm setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationSlurmdbdCustomSettings <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationSlurmdbdCustomSettings {
    string ParameterName = null,
    string ParameterValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterName">ParameterName</a></code> | <code>string</code> | The slurmdbd.conf parameter name. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterValue">ParameterValue</a></code> | <code>string</code> | The value for the slurmdbd.conf parameter. |

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

The slurmdbd.conf parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterValue"></a>

```csharp
public string ParameterValue { get; set; }
```

- *Type:* string

The value for the slurmdbd.conf parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationSlurmRest <a name="PcsClusterSlurmConfigurationSlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationSlurmRest {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.property.mode">Mode</a></code> | <code>string</code> | The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/pcs_cluster#mode PcsCluster#mode}

---

## Classes <a name="Classes" id="Classes"></a>

### PcsClusterEndpointsList <a name="PcsClusterEndpointsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get"></a>

```csharp
private PcsClusterEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PcsClusterEndpointsOutputReference <a name="PcsClusterEndpointsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints">PcsClusterEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.internalValue"></a>

```csharp
public PcsClusterEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints">PcsClusterEndpoints</a>

---


### PcsClusterErrorInfoList <a name="PcsClusterErrorInfoList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterErrorInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get"></a>

```csharp
private PcsClusterErrorInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PcsClusterErrorInfoOutputReference <a name="PcsClusterErrorInfoOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterErrorInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo">PcsClusterErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.internalValue"></a>

```csharp
public PcsClusterErrorInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo">PcsClusterErrorInfo</a>

---


### PcsClusterNetworkingOutputReference <a name="PcsClusterNetworkingOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterNetworkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterNetworking InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

---


### PcsClusterSchedulerOutputReference <a name="PcsClusterSchedulerOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSchedulerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterScheduler InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

---


### PcsClusterSlurmConfigurationAccountingOutputReference <a name="PcsClusterSlurmConfigurationAccountingOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationAccountingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetDefaultPurgeTimeInDays">ResetDefaultPurgeTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultPurgeTimeInDays` <a name="ResetDefaultPurgeTimeInDays" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetDefaultPurgeTimeInDays"></a>

```csharp
private void ResetDefaultPurgeTimeInDays()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDaysInput">DefaultPurgeTimeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDays">DefaultPurgeTimeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPurgeTimeInDaysInput`<sup>Optional</sup> <a name="DefaultPurgeTimeInDaysInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDaysInput"></a>

```csharp
public double DefaultPurgeTimeInDaysInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `DefaultPurgeTimeInDays`<sup>Required</sup> <a name="DefaultPurgeTimeInDays" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDays"></a>

```csharp
public double DefaultPurgeTimeInDays { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationAccounting InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

---


### PcsClusterSlurmConfigurationAuthKeyOutputReference <a name="PcsClusterSlurmConfigurationAuthKeyOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationAuthKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretVersion"></a>

```csharp
private void ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationAuthKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

---


### PcsClusterSlurmConfigurationCgroupCustomSettingsList <a name="PcsClusterSlurmConfigurationCgroupCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationCgroupCustomSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get"></a>

```csharp
private PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationCgroupCustomSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]

---


### PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterName"></a>

```csharp
private void ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterValue"></a>

```csharp
private void ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValueInput"></a>

```csharp
public string ParameterValueInput { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationCgroupCustomSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>

---


### PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference <a name="PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretVersion"></a>

```csharp
private void ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationJwtAuthJwtKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

---


### PcsClusterSlurmConfigurationJwtAuthOutputReference <a name="PcsClusterSlurmConfigurationJwtAuthOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationJwtAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey">PutJwtKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resetJwtKey">ResetJwtKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJwtKey` <a name="PutJwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey"></a>

```csharp
private void PutJwtKey(PcsClusterSlurmConfigurationJwtAuthJwtKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

---

##### `ResetJwtKey` <a name="ResetJwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resetJwtKey"></a>

```csharp
private void ResetJwtKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKey">JwtKey</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference">PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKeyInput">JwtKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JwtKey`<sup>Required</sup> <a name="JwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKey"></a>

```csharp
public PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference JwtKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference">PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference</a>

---

##### `JwtKeyInput`<sup>Optional</sup> <a name="JwtKeyInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKeyInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationJwtAuthJwtKey JwtKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationJwtAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

---


### PcsClusterSlurmConfigurationOutputReference <a name="PcsClusterSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting">PutAccounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey">PutAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings">PutCgroupCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth">PutJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings">PutSlurmCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings">PutSlurmdbdCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest">PutSlurmRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAccounting">ResetAccounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAuthKey">ResetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetCgroupCustomSettings">ResetCgroupCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetJwtAuth">ResetJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds">ResetScaleDownIdleTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmCustomSettings">ResetSlurmCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmdbdCustomSettings">ResetSlurmdbdCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmRest">ResetSlurmRest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccounting` <a name="PutAccounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting"></a>

```csharp
private void PutAccounting(PcsClusterSlurmConfigurationAccounting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

---

##### `PutAuthKey` <a name="PutAuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey"></a>

```csharp
private void PutAuthKey(PcsClusterSlurmConfigurationAuthKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

---

##### `PutCgroupCustomSettings` <a name="PutCgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings"></a>

```csharp
private void PutCgroupCustomSettings(IResolvable|PcsClusterSlurmConfigurationCgroupCustomSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]

---

##### `PutJwtAuth` <a name="PutJwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth"></a>

```csharp
private void PutJwtAuth(PcsClusterSlurmConfigurationJwtAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

---

##### `PutSlurmCustomSettings` <a name="PutSlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings"></a>

```csharp
private void PutSlurmCustomSettings(IResolvable|PcsClusterSlurmConfigurationSlurmCustomSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]

---

##### `PutSlurmdbdCustomSettings` <a name="PutSlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings"></a>

```csharp
private void PutSlurmdbdCustomSettings(IResolvable|PcsClusterSlurmConfigurationSlurmdbdCustomSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]

---

##### `PutSlurmRest` <a name="PutSlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest"></a>

```csharp
private void PutSlurmRest(PcsClusterSlurmConfigurationSlurmRest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

---

##### `ResetAccounting` <a name="ResetAccounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAccounting"></a>

```csharp
private void ResetAccounting()
```

##### `ResetAuthKey` <a name="ResetAuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAuthKey"></a>

```csharp
private void ResetAuthKey()
```

##### `ResetCgroupCustomSettings` <a name="ResetCgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetCgroupCustomSettings"></a>

```csharp
private void ResetCgroupCustomSettings()
```

##### `ResetJwtAuth` <a name="ResetJwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetJwtAuth"></a>

```csharp
private void ResetJwtAuth()
```

##### `ResetScaleDownIdleTimeInSeconds` <a name="ResetScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds"></a>

```csharp
private void ResetScaleDownIdleTimeInSeconds()
```

##### `ResetSlurmCustomSettings` <a name="ResetSlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmCustomSettings"></a>

```csharp
private void ResetSlurmCustomSettings()
```

##### `ResetSlurmdbdCustomSettings` <a name="ResetSlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmdbdCustomSettings"></a>

```csharp
private void ResetSlurmdbdCustomSettings()
```

##### `ResetSlurmRest` <a name="ResetSlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmRest"></a>

```csharp
private void ResetSlurmRest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accounting">Accounting</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference">PcsClusterSlurmConfigurationAccountingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKey">AuthKey</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference">PcsClusterSlurmConfigurationAuthKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettings">CgroupCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList">PcsClusterSlurmConfigurationCgroupCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuth">JwtAuth</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference">PcsClusterSlurmConfigurationJwtAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettings">SlurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList">PcsClusterSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettings">SlurmdbdCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList">PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRest">SlurmRest</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference">PcsClusterSlurmConfigurationSlurmRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accountingInput">AccountingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKeyInput">AuthKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettingsInput">CgroupCustomSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuthInput">JwtAuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput">ScaleDownIdleTimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettingsInput">SlurmCustomSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettingsInput">SlurmdbdCustomSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRestInput">SlurmRestInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">ScaleDownIdleTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accounting`<sup>Required</sup> <a name="Accounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accounting"></a>

```csharp
public PcsClusterSlurmConfigurationAccountingOutputReference Accounting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference">PcsClusterSlurmConfigurationAccountingOutputReference</a>

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKey"></a>

```csharp
public PcsClusterSlurmConfigurationAuthKeyOutputReference AuthKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference">PcsClusterSlurmConfigurationAuthKeyOutputReference</a>

---

##### `CgroupCustomSettings`<sup>Required</sup> <a name="CgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettings"></a>

```csharp
public PcsClusterSlurmConfigurationCgroupCustomSettingsList CgroupCustomSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList">PcsClusterSlurmConfigurationCgroupCustomSettingsList</a>

---

##### `JwtAuth`<sup>Required</sup> <a name="JwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuth"></a>

```csharp
public PcsClusterSlurmConfigurationJwtAuthOutputReference JwtAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference">PcsClusterSlurmConfigurationJwtAuthOutputReference</a>

---

##### `SlurmCustomSettings`<sup>Required</sup> <a name="SlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```csharp
public PcsClusterSlurmConfigurationSlurmCustomSettingsList SlurmCustomSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList">PcsClusterSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `SlurmdbdCustomSettings`<sup>Required</sup> <a name="SlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettings"></a>

```csharp
public PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList SlurmdbdCustomSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList">PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList</a>

---

##### `SlurmRest`<sup>Required</sup> <a name="SlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRest"></a>

```csharp
public PcsClusterSlurmConfigurationSlurmRestOutputReference SlurmRest { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference">PcsClusterSlurmConfigurationSlurmRestOutputReference</a>

---

##### `AccountingInput`<sup>Optional</sup> <a name="AccountingInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accountingInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationAccounting AccountingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

---

##### `AuthKeyInput`<sup>Optional</sup> <a name="AuthKeyInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKeyInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationAuthKey AuthKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

---

##### `CgroupCustomSettingsInput`<sup>Optional</sup> <a name="CgroupCustomSettingsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettingsInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationCgroupCustomSettings[] CgroupCustomSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>[]

---

##### `JwtAuthInput`<sup>Optional</sup> <a name="JwtAuthInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuthInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationJwtAuth JwtAuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

---

##### `ScaleDownIdleTimeInSecondsInput`<sup>Optional</sup> <a name="ScaleDownIdleTimeInSecondsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput"></a>

```csharp
public double ScaleDownIdleTimeInSecondsInput { get; }
```

- *Type:* double

---

##### `SlurmCustomSettingsInput`<sup>Optional</sup> <a name="SlurmCustomSettingsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettingsInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmCustomSettings[] SlurmCustomSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]

---

##### `SlurmdbdCustomSettingsInput`<sup>Optional</sup> <a name="SlurmdbdCustomSettingsInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettingsInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmdbdCustomSettings[] SlurmdbdCustomSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]

---

##### `SlurmRestInput`<sup>Optional</sup> <a name="SlurmRestInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRestInput"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmRest SlurmRestInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

---

##### `ScaleDownIdleTimeInSeconds`<sup>Required</sup> <a name="ScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```csharp
public double ScaleDownIdleTimeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

---


### PcsClusterSlurmConfigurationSlurmCustomSettingsList <a name="PcsClusterSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationSlurmCustomSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get"></a>

```csharp
private PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmCustomSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>[]

---


### PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName"></a>

```csharp
private void ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue"></a>

```csharp
private void ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput"></a>

```csharp
public string ParameterValueInput { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmCustomSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>

---


### PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get"></a>

```csharp
private PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmdbdCustomSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>[]

---


### PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterName"></a>

```csharp
private void ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterValue"></a>

```csharp
private void ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValueInput"></a>

```csharp
public string ParameterValueInput { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmdbdCustomSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>

---


### PcsClusterSlurmConfigurationSlurmRestOutputReference <a name="PcsClusterSlurmConfigurationSlurmRestOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsClusterSlurmConfigurationSlurmRestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsClusterSlurmConfigurationSlurmRest InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

---



