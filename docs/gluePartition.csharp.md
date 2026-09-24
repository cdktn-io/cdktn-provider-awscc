# `gluePartition` Submodule <a name="`gluePartition` Submodule" id="@cdktn/provider-awscc.gluePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartition <a name="GluePartition" id="@cdktn/provider-awscc.gluePartition.GluePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition awscc_glue_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartition(Construct Scope, string Id, GluePartitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig">GluePartitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig">GluePartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput">PutPartitionInput</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gluePartition.GluePartition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.gluePartition.GluePartition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionInput` <a name="PutPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput"></a>

```csharp
private void PutPartitionInput(GluePartitionPartitionInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GluePartition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GluePartition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GluePartition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GluePartition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GluePartition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GluePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GluePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues">IdentifierPartitionInputValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput">PartitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput">PartitionInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentifierPartitionInputValues`<sup>Required</sup> <a name="IdentifierPartitionInputValues" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues"></a>

```csharp
public string IdentifierPartitionInputValues { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Required</sup> <a name="PartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput"></a>

```csharp
public GluePartitionPartitionInputOutputReference PartitionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `PartitionInputInput`<sup>Optional</sup> <a name="PartitionInputInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput"></a>

```csharp
public IResolvable|GluePartitionPartitionInput PartitionInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionConfig <a name="GluePartitionConfig" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CatalogId,
    string DatabaseName,
    GluePartitionPartitionInput PartitionInput,
    string TableName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | The name of the catalog database in which to create the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The AWS account ID of the catalog in which the partion is to be created. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput">PartitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | The structure used to create and update a partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName">TableName</a></code> | <code>string</code> | The name of the metadata table in which the partition is to be created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The name of the catalog database in which to create the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#catalog_id GluePartition#catalog_id}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The AWS account ID of the catalog in which the partion is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#database_name GluePartition#database_name}

---

##### `PartitionInput`<sup>Required</sup> <a name="PartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput"></a>

```csharp
public GluePartitionPartitionInput PartitionInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

The structure used to create and update a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#partition_input GluePartition#partition_input}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name of the metadata table in which the partition is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#table_name GluePartition#table_name}

---

### GluePartitionPartitionInput <a name="GluePartitionPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInput {
    string[] Values,
    string Parameters = null,
    GluePartitionPartitionInputStorageDescriptor StorageDescriptor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values">Values</a></code> | <code>string[]</code> | The values of the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters">Parameters</a></code> | <code>string</code> | Key-value pairs defining partition parameters. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | Provides information about the physical location where the partition is stored. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The values of the partition.

Although this parameter is not required by the SDK, you must specify this parameter for a valid input. The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#values GluePartition#values}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Key-value pairs defining partition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `StorageDescriptor`<sup>Optional</sup> <a name="StorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptor StorageDescriptor { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

Provides information about the physical location where the partition is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#storage_descriptor GluePartition#storage_descriptor}

---

### GluePartitionPartitionInputStorageDescriptor <a name="GluePartitionPartitionInputStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptor {
    string[] BucketColumns = null,
    IResolvable|GluePartitionPartitionInputStorageDescriptorColumns[] Columns = null,
    bool|IResolvable Compressed = null,
    string InputFormat = null,
    string Location = null,
    double NumberOfBuckets = null,
    string OutputFormat = null,
    string Parameters = null,
    GluePartitionPartitionInputStorageDescriptorSchemaReference SchemaReference = null,
    GluePartitionPartitionInputStorageDescriptorSerdeInfo SerdeInfo = null,
    GluePartitionPartitionInputStorageDescriptorSkewedInfo SkewedInfo = null,
    IResolvable|GluePartitionPartitionInputStorageDescriptorSortColumns[] SortColumns = null,
    bool|IResolvable StoredAsSubDirectories = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns">BucketColumns</a></code> | <code>string[]</code> | A list of reducer grouping columns, clustering columns, and bucketing columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns">Columns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]</code> | A list of the Columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed">Compressed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the data in the table is compressed, or False if not. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat">InputFormat</a></code> | <code>string</code> | The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location">Location</a></code> | <code>string</code> | The physical location of the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>double</code> | The number of buckets. You must specify this property if the partition contains any dimension columns. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat">OutputFormat</a></code> | <code>string</code> | The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters">Parameters</a></code> | <code>string</code> | The user-supplied properties in key-value form. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | An object that references a schema stored in the AWS Glue Schema Registry. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | The serialization/deserialization (SerDe) information. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | The information about values that appear frequently in a column (skewed values). |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns">SortColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]</code> | A list specifying the sort order of each bucket in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the table data is stored in subdirectories, or False if not. |

---

##### `BucketColumns`<sup>Optional</sup> <a name="BucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns"></a>

```csharp
public string[] BucketColumns { get; set; }
```

- *Type:* string[]

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#bucket_columns GluePartition#bucket_columns}

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorColumns[] Columns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#columns GluePartition#columns}

---

##### `Compressed`<sup>Optional</sup> <a name="Compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed"></a>

```csharp
public bool|IResolvable Compressed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#compressed GluePartition#compressed}

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat"></a>

```csharp
public string InputFormat { get; set; }
```

- *Type:* string

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#input_format GluePartition#input_format}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#location GluePartition#location}

---

##### `NumberOfBuckets`<sup>Optional</sup> <a name="NumberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets"></a>

```csharp
public double NumberOfBuckets { get; set; }
```

- *Type:* double

The number of buckets. You must specify this property if the partition contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#number_of_buckets GluePartition#number_of_buckets}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#output_format GluePartition#output_format}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `SchemaReference`<sup>Optional</sup> <a name="SchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSchemaReference SchemaReference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_reference GluePartition#schema_reference}

---

##### `SerdeInfo`<sup>Optional</sup> <a name="SerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSerdeInfo SerdeInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serde_info GluePartition#serde_info}

---

##### `SkewedInfo`<sup>Optional</sup> <a name="SkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSkewedInfo SkewedInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_info GluePartition#skewed_info}

---

##### `SortColumns`<sup>Optional</sup> <a name="SortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSortColumns[] SortColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_columns GluePartition#sort_columns}

---

##### `StoredAsSubDirectories`<sup>Optional</sup> <a name="StoredAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories"></a>

```csharp
public bool|IResolvable StoredAsSubDirectories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}

---

### GluePartitionPartitionInputStorageDescriptorColumns <a name="GluePartitionPartitionInputStorageDescriptorColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorColumns {
    string Comment = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment">Comment</a></code> | <code>string</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name">Name</a></code> | <code>string</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type">Type</a></code> | <code>string</code> | The data type of the Column. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#comment GluePartition#comment}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#type GluePartition#type}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSchemaReference {
    GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId SchemaId = null,
    string SchemaVersionId = null,
    double SchemaVersionNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>string</code> | The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>double</code> | The version number of the schema. |

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId SchemaId { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_id GluePartition#schema_id}

---

##### `SchemaVersionId`<sup>Optional</sup> <a name="SchemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```csharp
public string SchemaVersionId { get; set; }
```

- *Type:* string

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_id GluePartition#schema_version_id}

---

##### `SchemaVersionNumber`<sup>Optional</sup> <a name="SchemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```csharp
public double SchemaVersionNumber { get; set; }
```

- *Type:* double

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_number GluePartition#schema_version_number}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId {
    string RegistryName = null,
    string SchemaArn = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName">RegistryName</a></code> | <code>string</code> | The name of the schema registry that contains the schema. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">SchemaArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the schema. One of SchemaArn or SchemaName has to be provided. |

---

##### `RegistryName`<sup>Optional</sup> <a name="RegistryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```csharp
public string RegistryName { get; set; }
```

- *Type:* string

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#registry_name GluePartition#registry_name}

---

##### `SchemaArn`<sup>Optional</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```csharp
public string SchemaArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_arn GluePartition#schema_arn}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_name GluePartition#schema_name}

---

### GluePartitionPartitionInputStorageDescriptorSerdeInfo <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSerdeInfo {
    string Name = null,
    string Parameters = null,
    string SerializationLibrary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name">Name</a></code> | <code>string</code> | Name of the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters">Parameters</a></code> | <code>string</code> | These key-value pairs define initialization parameters for the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary">SerializationLibrary</a></code> | <code>string</code> | Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `SerializationLibrary`<sup>Optional</sup> <a name="SerializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```csharp
public string SerializationLibrary { get; set; }
```

- *Type:* string

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serialization_library GluePartition#serialization_library}

---

### GluePartitionPartitionInputStorageDescriptorSkewedInfo <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSkewedInfo {
    string[] SkewedColumnNames = null,
    string SkewedColumnValueLocationMaps = null,
    string[] SkewedColumnValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>string[]</code> | A list of values that appear so frequently as to be considered skewed. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>string</code> | A mapping of skewed values to the columns that contain them. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>string[]</code> | A list of names of columns that contain skewed values. |

---

##### `SkewedColumnNames`<sup>Optional</sup> <a name="SkewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```csharp
public string[] SkewedColumnNames { get; set; }
```

- *Type:* string[]

A list of values that appear so frequently as to be considered skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_names GluePartition#skewed_column_names}

---

##### `SkewedColumnValueLocationMaps`<sup>Optional</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```csharp
public string SkewedColumnValueLocationMaps { get; set; }
```

- *Type:* string

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}

---

##### `SkewedColumnValues`<sup>Optional</sup> <a name="SkewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```csharp
public string[] SkewedColumnValues { get; set; }
```

- *Type:* string[]

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_values GluePartition#skewed_column_values}

---

### GluePartitionPartitionInputStorageDescriptorSortColumns <a name="GluePartitionPartitionInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSortColumns {
    string Column = null,
    double SortOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column">Column</a></code> | <code>string</code> | The name of the column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder">SortOrder</a></code> | <code>double</code> | Indicates that the column is sorted in ascending order (== 1), or in descending order (==0). |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

The name of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#column GluePartition#column}

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder"></a>

```csharp
public double SortOrder { get; set; }
```

- *Type:* double

Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_order GluePartition#sort_order}

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionPartitionInputOutputReference <a name="GluePartitionPartitionInputOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor">PutStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor">ResetStorageDescriptor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageDescriptor` <a name="PutStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor"></a>

```csharp
private void PutStorageDescriptor(GluePartitionPartitionInputStorageDescriptor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetStorageDescriptor` <a name="ResetStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor"></a>

```csharp
private void ResetStorageDescriptor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput">StorageDescriptorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorOutputReference StorageDescriptor { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `StorageDescriptorInput`<sup>Optional</sup> <a name="StorageDescriptorInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptor StorageDescriptorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---


### GluePartitionPartitionInputStorageDescriptorColumnsList <a name="GluePartitionPartitionInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get"></a>

```csharp
private GluePartitionPartitionInputStorageDescriptorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]

---


### GluePartitionPartitionInputStorageDescriptorColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>

---


### GluePartitionPartitionInputStorageDescriptorOutputReference <a name="GluePartitionPartitionInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference">PutSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo">PutSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo">PutSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns">PutSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns">ResetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed">ResetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets">ResetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference">ResetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo">ResetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo">ResetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns">ResetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories">ResetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns"></a>

```csharp
private void PutColumns(IResolvable|GluePartitionPartitionInputStorageDescriptorColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]

---

##### `PutSchemaReference` <a name="PutSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference"></a>

```csharp
private void PutSchemaReference(GluePartitionPartitionInputStorageDescriptorSchemaReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---

##### `PutSerdeInfo` <a name="PutSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo"></a>

```csharp
private void PutSerdeInfo(GluePartitionPartitionInputStorageDescriptorSerdeInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---

##### `PutSkewedInfo` <a name="PutSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo"></a>

```csharp
private void PutSkewedInfo(GluePartitionPartitionInputStorageDescriptorSkewedInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---

##### `PutSortColumns` <a name="PutSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns"></a>

```csharp
private void PutSortColumns(IResolvable|GluePartitionPartitionInputStorageDescriptorSortColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]

---

##### `ResetBucketColumns` <a name="ResetBucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns"></a>

```csharp
private void ResetBucketColumns()
```

##### `ResetColumns` <a name="ResetColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns"></a>

```csharp
private void ResetColumns()
```

##### `ResetCompressed` <a name="ResetCompressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed"></a>

```csharp
private void ResetCompressed()
```

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat"></a>

```csharp
private void ResetInputFormat()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetNumberOfBuckets` <a name="ResetNumberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```csharp
private void ResetNumberOfBuckets()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSchemaReference` <a name="ResetSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference"></a>

```csharp
private void ResetSchemaReference()
```

##### `ResetSerdeInfo` <a name="ResetSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo"></a>

```csharp
private void ResetSerdeInfo()
```

##### `ResetSkewedInfo` <a name="ResetSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo"></a>

```csharp
private void ResetSkewedInfo()
```

##### `ResetSortColumns` <a name="ResetSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns"></a>

```csharp
private void ResetSortColumns()
```

##### `ResetStoredAsSubDirectories` <a name="ResetStoredAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```csharp
private void ResetStoredAsSubDirectories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns">SortColumns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput">BucketColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput">CompressedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput">NumberOfBucketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput">SchemaReferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput">SerdeInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput">SkewedInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput">SortColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">StoredAsSubDirectoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns">BucketColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed">Compressed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a>

---

##### `SchemaReference`<sup>Required</sup> <a name="SchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference SchemaReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `SerdeInfo`<sup>Required</sup> <a name="SerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference SerdeInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `SkewedInfo`<sup>Required</sup> <a name="SkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference SkewedInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `SortColumns`<sup>Required</sup> <a name="SortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSortColumnsList SortColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a>

---

##### `BucketColumnsInput`<sup>Optional</sup> <a name="BucketColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```csharp
public string[] BucketColumnsInput { get; }
```

- *Type:* string[]

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorColumns[] ColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns">GluePartitionPartitionInputStorageDescriptorColumns</a>[]

---

##### `CompressedInput`<sup>Optional</sup> <a name="CompressedInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput"></a>

```csharp
public bool|IResolvable CompressedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput"></a>

```csharp
public string InputFormatInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NumberOfBucketsInput`<sup>Optional</sup> <a name="NumberOfBucketsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```csharp
public double NumberOfBucketsInput { get; }
```

- *Type:* double

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `SchemaReferenceInput`<sup>Optional</sup> <a name="SchemaReferenceInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSchemaReference SchemaReferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---

##### `SerdeInfoInput`<sup>Optional</sup> <a name="SerdeInfoInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSerdeInfo SerdeInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---

##### `SkewedInfoInput`<sup>Optional</sup> <a name="SkewedInfoInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSkewedInfo SkewedInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---

##### `SortColumnsInput`<sup>Optional</sup> <a name="SortColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSortColumns[] SortColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]

---

##### `StoredAsSubDirectoriesInput`<sup>Optional</sup> <a name="StoredAsSubDirectoriesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```csharp
public bool|IResolvable StoredAsSubDirectoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BucketColumns`<sup>Required</sup> <a name="BucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```csharp
public string[] BucketColumns { get; }
```

- *Type:* string[]

---

##### `Compressed`<sup>Required</sup> <a name="Compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed"></a>

```csharp
public bool|IResolvable Compressed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat"></a>

```csharp
public string InputFormat { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `NumberOfBuckets`<sup>Required</sup> <a name="NumberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```csharp
public double NumberOfBuckets { get; }
```

- *Type:* double

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `StoredAsSubDirectories`<sup>Required</sup> <a name="StoredAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```csharp
public bool|IResolvable StoredAsSubDirectories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId">PutSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">ResetSchemaVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber">ResetSchemaVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaId` <a name="PutSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```csharp
private void PutSchemaId(GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```csharp
private void ResetSchemaId()
```

##### `ResetSchemaVersionId` <a name="ResetSchemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```csharp
private void ResetSchemaVersionId()
```

##### `ResetSchemaVersionNumber` <a name="ResetSchemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber"></a>

```csharp
private void ResetSchemaVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">SchemaVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">SchemaVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```csharp
public GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference SchemaId { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId SchemaIdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `SchemaVersionIdInput`<sup>Optional</sup> <a name="SchemaVersionIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```csharp
public string SchemaVersionIdInput { get; }
```

- *Type:* string

---

##### `SchemaVersionNumberInput`<sup>Optional</sup> <a name="SchemaVersionNumberInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```csharp
public double SchemaVersionNumberInput { get; }
```

- *Type:* double

---

##### `SchemaVersionId`<sup>Required</sup> <a name="SchemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```csharp
public string SchemaVersionId { get; }
```

- *Type:* string

---

##### `SchemaVersionNumber`<sup>Required</sup> <a name="SchemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```csharp
public double SchemaVersionNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSchemaReference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">ResetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">ResetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegistryName` <a name="ResetRegistryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```csharp
private void ResetRegistryName()
```

##### `ResetSchemaArn` <a name="ResetSchemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```csharp
private void ResetSchemaArn()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">RegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">SchemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">RegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">SchemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```csharp
public string RegistryNameInput { get; }
```

- *Type:* string

---

##### `SchemaArnInput`<sup>Optional</sup> <a name="SchemaArnInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```csharp
public string SchemaArnInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```csharp
public string RegistryName { get; }
```

- *Type:* string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```csharp
public string SchemaArn { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary">ResetSerializationLibrary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSerializationLibrary` <a name="ResetSerializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary"></a>

```csharp
private void ResetSerializationLibrary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">SerializationLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `SerializationLibraryInput`<sup>Optional</sup> <a name="SerializationLibraryInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```csharp
public string SerializationLibraryInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```csharp
public string SerializationLibrary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSerdeInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---


### GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">ResetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">ResetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">ResetSkewedColumnValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSkewedColumnNames` <a name="ResetSkewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```csharp
private void ResetSkewedColumnNames()
```

##### `ResetSkewedColumnValueLocationMaps` <a name="ResetSkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```csharp
private void ResetSkewedColumnValueLocationMaps()
```

##### `ResetSkewedColumnValues` <a name="ResetSkewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```csharp
private void ResetSkewedColumnValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">SkewedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">SkewedColumnValueLocationMapsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">SkewedColumnValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SkewedColumnNamesInput`<sup>Optional</sup> <a name="SkewedColumnNamesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```csharp
public string[] SkewedColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `SkewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="SkewedColumnValueLocationMapsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```csharp
public string SkewedColumnValueLocationMapsInput { get; }
```

- *Type:* string

---

##### `SkewedColumnValuesInput`<sup>Optional</sup> <a name="SkewedColumnValuesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```csharp
public string[] SkewedColumnValuesInput { get; }
```

- *Type:* string[]

---

##### `SkewedColumnNames`<sup>Required</sup> <a name="SkewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```csharp
public string[] SkewedColumnNames { get; }
```

- *Type:* string[]

---

##### `SkewedColumnValueLocationMaps`<sup>Required</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```csharp
public string SkewedColumnValueLocationMaps { get; }
```

- *Type:* string

---

##### `SkewedColumnValues`<sup>Required</sup> <a name="SkewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```csharp
public string[] SkewedColumnValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSkewedInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsList <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSortColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get"></a>

```csharp
private GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSortColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>[]

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder">ResetSortOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumn` <a name="ResetColumn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn"></a>

```csharp
private void ResetColumn()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">SortOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```csharp
public double SortOrderInput { get; }
```

- *Type:* double

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```csharp
public double SortOrder { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionPartitionInputStorageDescriptorSortColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns">GluePartitionPartitionInputStorageDescriptorSortColumns</a>

---



