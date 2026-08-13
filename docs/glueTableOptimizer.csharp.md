# `glueTableOptimizer` Submodule <a name="`glueTableOptimizer` Submodule" id="@cdktn/provider-awscc.glueTableOptimizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTableOptimizer <a name="GlueTableOptimizer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer awscc_glue_table_optimizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizer(Construct Scope, string Id, GlueTableOptimizerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig">GlueTableOptimizerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig">GlueTableOptimizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration">PutTableOptimizerConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTableOptimizerConfiguration` <a name="PutTableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration"></a>

```csharp
private void PutTableOptimizerConfiguration(GlueTableOptimizerTableOptimizerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.putTableOptimizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueTableOptimizer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueTableOptimizer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueTableOptimizer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueTableOptimizer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueTableOptimizer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueTableOptimizer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueTableOptimizer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueTableOptimizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueTableOptimizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfiguration">TableOptimizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfigurationInput">TableOptimizerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TableOptimizerConfiguration`<sup>Required</sup> <a name="TableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationOutputReference TableOptimizerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TableOptimizerConfigurationInput`<sup>Optional</sup> <a name="TableOptimizerConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableOptimizerConfigurationInput"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfiguration TableOptimizerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTableOptimizerConfig <a name="GlueTableOptimizerConfig" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CatalogId,
    string DatabaseName,
    string TableName,
    GlueTableOptimizerTableOptimizerConfiguration TableOptimizerConfiguration,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | The catalog ID of the table. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database. For Hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableName">TableName</a></code> | <code>string</code> | The table name. For Hive compatibility, this must be entirely lowercase. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableOptimizerConfiguration">TableOptimizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | Specifies configuration details of a table optimizer. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.type">Type</a></code> | <code>string</code> | The type of table optimizer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The catalog ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#catalog_id GlueTableOptimizer#catalog_id}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#database_name GlueTableOptimizer#database_name}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The table name. For Hive compatibility, this must be entirely lowercase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#table_name GlueTableOptimizer#table_name}

---

##### `TableOptimizerConfiguration`<sup>Required</sup> <a name="TableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.tableOptimizerConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfiguration TableOptimizerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

Specifies configuration details of a table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#table_optimizer_configuration GlueTableOptimizer#table_optimizer_configuration}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#type GlueTableOptimizer#type}

---

### GlueTableOptimizerTableOptimizerConfiguration <a name="GlueTableOptimizerTableOptimizerConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfiguration {
    bool|IResolvable Enabled,
    string RoleArn,
    GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration CompactionConfiguration = null,
    GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration OrphanFileDeletionConfiguration = null,
    GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration RetentionConfiguration = null,
    GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration VpcConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the table optimization is enabled. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.compactionConfiguration">CompactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | The configuration for a compaction optimizer. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.orphanFileDeletionConfiguration">OrphanFileDeletionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.retentionConfiguration">RetentionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | The configuration for a snapshot retention optimizer for Apache Iceberg tables. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | An object that describes the VPC configuration for a table optimizer. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the table optimization is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#enabled GlueTableOptimizer#enabled}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#role_arn GlueTableOptimizer#role_arn}

---

##### `CompactionConfiguration`<sup>Optional</sup> <a name="CompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.compactionConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration CompactionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

The configuration for a compaction optimizer.

This configuration defines how data files in your table will be compacted to improve query performance and reduce storage costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#compaction_configuration GlueTableOptimizer#compaction_configuration}

---

##### `OrphanFileDeletionConfiguration`<sup>Optional</sup> <a name="OrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.orphanFileDeletionConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration OrphanFileDeletionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

OrphanFileDeletionConfiguration is a property that can be included within the TableOptimizer resource.

It controls the automatic deletion of orphaned files - files that are not tracked by the table metadata, and older than the configured age limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#orphan_file_deletion_configuration GlueTableOptimizer#orphan_file_deletion_configuration}

---

##### `RetentionConfiguration`<sup>Optional</sup> <a name="RetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.retentionConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration RetentionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

The configuration for a snapshot retention optimizer for Apache Iceberg tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#retention_configuration GlueTableOptimizer#retention_configuration}

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration.property.vpcConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration VpcConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

An object that describes the VPC configuration for a table optimizer.

This configuration is necessary to perform optimization on tables that are in a customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#vpc_configuration GlueTableOptimizer#vpc_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration {
    GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration IcebergConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | The configuration for an Iceberg compaction optimizer. |

---

##### `IcebergConfiguration`<sup>Optional</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.property.icebergConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration IcebergConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

The configuration for an Iceberg compaction optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration {
    double DeleteFileThreshold = null,
    double MinInputFiles = null,
    string Strategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.deleteFileThreshold">DeleteFileThreshold</a></code> | <code>double</code> | The minimum number of deletes in a data file to make it eligible for compaction. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.minInputFiles">MinInputFiles</a></code> | <code>double</code> | The minimum number of input files before compaction is triggered. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.strategy">Strategy</a></code> | <code>string</code> | The compaction strategy to use. Valid values are binpack, sort, and z-order. |

---

##### `DeleteFileThreshold`<sup>Optional</sup> <a name="DeleteFileThreshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.deleteFileThreshold"></a>

```csharp
public double DeleteFileThreshold { get; set; }
```

- *Type:* double

The minimum number of deletes in a data file to make it eligible for compaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#delete_file_threshold GlueTableOptimizer#delete_file_threshold}

---

##### `MinInputFiles`<sup>Optional</sup> <a name="MinInputFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.minInputFiles"></a>

```csharp
public double MinInputFiles { get; set; }
```

- *Type:* double

The minimum number of input files before compaction is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#min_input_files GlueTableOptimizer#min_input_files}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.property.strategy"></a>

```csharp
public string Strategy { get; set; }
```

- *Type:* string

The compaction strategy to use. Valid values are binpack, sort, and z-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#strategy GlueTableOptimizer#strategy}

---

### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration {
    GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration IcebergConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed. |

---

##### `IcebergConfiguration`<sup>Optional</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.property.icebergConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration IcebergConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

The IcebergConfiguration property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration {
    string Location = null,
    double OrphanFileRetentionPeriodInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.location">Location</a></code> | <code>string</code> | Specifies a directory in which to look for orphan files (defaults to the table's location). |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.orphanFileRetentionPeriodInDays">OrphanFileRetentionPeriodInDays</a></code> | <code>double</code> | The specific number of days you want to keep the orphan files. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Specifies a directory in which to look for orphan files (defaults to the table's location).

You may choose a sub-directory rather than the top-level table location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#location GlueTableOptimizer#location}

---

##### `OrphanFileRetentionPeriodInDays`<sup>Optional</sup> <a name="OrphanFileRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.property.orphanFileRetentionPeriodInDays"></a>

```csharp
public double OrphanFileRetentionPeriodInDays { get; set; }
```

- *Type:* double

The specific number of days you want to keep the orphan files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#orphan_file_retention_period_in_days GlueTableOptimizer#orphan_file_retention_period_in_days}

---

### GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration {
    GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration IcebergConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | The configuration for an Iceberg snapshot retention optimizer. |

---

##### `IcebergConfiguration`<sup>Optional</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.property.icebergConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration IcebergConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

The configuration for an Iceberg snapshot retention optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#iceberg_configuration GlueTableOptimizer#iceberg_configuration}

---

### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration {
    bool|IResolvable CleanExpiredFiles = null,
    double NumberOfSnapshotsToRetain = null,
    double SnapshotRetentionPeriodInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.cleanExpiredFiles">CleanExpiredFiles</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#clean_expired_files GlueTableOptimizer#clean_expired_files}. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.numberOfSnapshotsToRetain">NumberOfSnapshotsToRetain</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain GlueTableOptimizer#number_of_snapshots_to_retain}. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days GlueTableOptimizer#snapshot_retention_period_in_days}. |

---

##### `CleanExpiredFiles`<sup>Optional</sup> <a name="CleanExpiredFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.cleanExpiredFiles"></a>

```csharp
public bool|IResolvable CleanExpiredFiles { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#clean_expired_files GlueTableOptimizer#clean_expired_files}.

---

##### `NumberOfSnapshotsToRetain`<sup>Optional</sup> <a name="NumberOfSnapshotsToRetain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.numberOfSnapshotsToRetain"></a>

```csharp
public double NumberOfSnapshotsToRetain { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#number_of_snapshots_to_retain GlueTableOptimizer#number_of_snapshots_to_retain}.

---

##### `SnapshotRetentionPeriodInDays`<sup>Optional</sup> <a name="SnapshotRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.property.snapshotRetentionPeriodInDays"></a>

```csharp
public double SnapshotRetentionPeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#snapshot_retention_period_in_days GlueTableOptimizer#snapshot_retention_period_in_days}.

---

### GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration <a name="GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration {
    string GlueConnectionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.property.glueConnectionName">GlueConnectionName</a></code> | <code>string</code> | The name of the AWS Glue connection used for the VPC for the table optimizer. |

---

##### `GlueConnectionName`<sup>Optional</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.property.glueConnectionName"></a>

```csharp
public string GlueConnectionName { get; set; }
```

- *Type:* string

The name of the AWS Glue connection used for the VPC for the table optimizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_table_optimizer#glue_connection_name GlueTableOptimizer#glue_connection_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetDeleteFileThreshold">ResetDeleteFileThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetMinInputFiles">ResetMinInputFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteFileThreshold` <a name="ResetDeleteFileThreshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetDeleteFileThreshold"></a>

```csharp
private void ResetDeleteFileThreshold()
```

##### `ResetMinInputFiles` <a name="ResetMinInputFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetMinInputFiles"></a>

```csharp
private void ResetMinInputFiles()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resetStrategy"></a>

```csharp
private void ResetStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThresholdInput">DeleteFileThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFilesInput">MinInputFilesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategyInput">StrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold">DeleteFileThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles">MinInputFiles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteFileThresholdInput`<sup>Optional</sup> <a name="DeleteFileThresholdInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThresholdInput"></a>

```csharp
public double DeleteFileThresholdInput { get; }
```

- *Type:* double

---

##### `MinInputFilesInput`<sup>Optional</sup> <a name="MinInputFilesInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFilesInput"></a>

```csharp
public double MinInputFilesInput { get; }
```

- *Type:* double

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategyInput"></a>

```csharp
public string StrategyInput { get; }
```

- *Type:* string

---

##### `DeleteFileThreshold`<sup>Required</sup> <a name="DeleteFileThreshold" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold"></a>

```csharp
public double DeleteFileThreshold { get; }
```

- *Type:* double

---

##### `MinInputFiles`<sup>Required</sup> <a name="MinInputFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles"></a>

```csharp
public double MinInputFiles { get; }
```

- *Type:* double

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration">PutIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resetIcebergConfiguration">ResetIcebergConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcebergConfiguration` <a name="PutIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration"></a>

```csharp
private void PutIcebergConfiguration(GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.putIcebergConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---

##### `ResetIcebergConfiguration` <a name="ResetIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resetIcebergConfiguration"></a>

```csharp
private void ResetIcebergConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfigurationInput">IcebergConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcebergConfiguration`<sup>Required</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference IcebergConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a>

---

##### `IcebergConfigurationInput`<sup>Optional</sup> <a name="IcebergConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration IcebergConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetOrphanFileRetentionPeriodInDays">ResetOrphanFileRetentionPeriodInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetOrphanFileRetentionPeriodInDays` <a name="ResetOrphanFileRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resetOrphanFileRetentionPeriodInDays"></a>

```csharp
private void ResetOrphanFileRetentionPeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDaysInput">OrphanFileRetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays">OrphanFileRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrphanFileRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="OrphanFileRetentionPeriodInDaysInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDaysInput"></a>

```csharp
public double OrphanFileRetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OrphanFileRetentionPeriodInDays`<sup>Required</sup> <a name="OrphanFileRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays"></a>

```csharp
public double OrphanFileRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration">PutIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resetIcebergConfiguration">ResetIcebergConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcebergConfiguration` <a name="PutIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration"></a>

```csharp
private void PutIcebergConfiguration(GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.putIcebergConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---

##### `ResetIcebergConfiguration` <a name="ResetIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resetIcebergConfiguration"></a>

```csharp
private void ResetIcebergConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfigurationInput">IcebergConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcebergConfiguration`<sup>Required</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference IcebergConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a>

---

##### `IcebergConfigurationInput`<sup>Optional</sup> <a name="IcebergConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration IcebergConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration">PutCompactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration">PutOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration">PutRetentionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetCompactionConfiguration">ResetCompactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetOrphanFileDeletionConfiguration">ResetOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetRetentionConfiguration">ResetRetentionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompactionConfiguration` <a name="PutCompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration"></a>

```csharp
private void PutCompactionConfiguration(GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putCompactionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---

##### `PutOrphanFileDeletionConfiguration` <a name="PutOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration"></a>

```csharp
private void PutOrphanFileDeletionConfiguration(GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putOrphanFileDeletionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---

##### `PutRetentionConfiguration` <a name="PutRetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration"></a>

```csharp
private void PutRetentionConfiguration(GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putRetentionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration"></a>

```csharp
private void PutVpcConfiguration(GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---

##### `ResetCompactionConfiguration` <a name="ResetCompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetCompactionConfiguration"></a>

```csharp
private void ResetCompactionConfiguration()
```

##### `ResetOrphanFileDeletionConfiguration` <a name="ResetOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetOrphanFileDeletionConfiguration"></a>

```csharp
private void ResetOrphanFileDeletionConfiguration()
```

##### `ResetRetentionConfiguration` <a name="ResetRetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetRetentionConfiguration"></a>

```csharp
private void ResetRetentionConfiguration()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.resetVpcConfiguration"></a>

```csharp
private void ResetVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration">CompactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration">OrphanFileDeletionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration">RetentionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfigurationInput">CompactionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfigurationInput">OrphanFileDeletionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfigurationInput">RetentionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompactionConfiguration`<sup>Required</sup> <a name="CompactionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference CompactionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a>

---

##### `OrphanFileDeletionConfiguration`<sup>Required</sup> <a name="OrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference OrphanFileDeletionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a>

---

##### `RetentionConfiguration`<sup>Required</sup> <a name="RetentionConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference RetentionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a>

---

##### `CompactionConfigurationInput`<sup>Optional</sup> <a name="CompactionConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfigurationInput"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration CompactionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">GlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OrphanFileDeletionConfigurationInput`<sup>Optional</sup> <a name="OrphanFileDeletionConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfigurationInput"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration OrphanFileDeletionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">GlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---

##### `RetentionConfigurationInput`<sup>Optional</sup> <a name="RetentionConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfigurationInput"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration RetentionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfigurationInput"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration VpcConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfiguration">GlueTableOptimizerTableOptimizerConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetCleanExpiredFiles">ResetCleanExpiredFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetNumberOfSnapshotsToRetain">ResetNumberOfSnapshotsToRetain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetSnapshotRetentionPeriodInDays">ResetSnapshotRetentionPeriodInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCleanExpiredFiles` <a name="ResetCleanExpiredFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetCleanExpiredFiles"></a>

```csharp
private void ResetCleanExpiredFiles()
```

##### `ResetNumberOfSnapshotsToRetain` <a name="ResetNumberOfSnapshotsToRetain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetNumberOfSnapshotsToRetain"></a>

```csharp
private void ResetNumberOfSnapshotsToRetain()
```

##### `ResetSnapshotRetentionPeriodInDays` <a name="ResetSnapshotRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resetSnapshotRetentionPeriodInDays"></a>

```csharp
private void ResetSnapshotRetentionPeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFilesInput">CleanExpiredFilesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetainInput">NumberOfSnapshotsToRetainInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDaysInput">SnapshotRetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles">CleanExpiredFiles</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain">NumberOfSnapshotsToRetain</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CleanExpiredFilesInput`<sup>Optional</sup> <a name="CleanExpiredFilesInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFilesInput"></a>

```csharp
public bool|IResolvable CleanExpiredFilesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberOfSnapshotsToRetainInput`<sup>Optional</sup> <a name="NumberOfSnapshotsToRetainInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetainInput"></a>

```csharp
public double NumberOfSnapshotsToRetainInput { get; }
```

- *Type:* double

---

##### `SnapshotRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="SnapshotRetentionPeriodInDaysInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDaysInput"></a>

```csharp
public double SnapshotRetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `CleanExpiredFiles`<sup>Required</sup> <a name="CleanExpiredFiles" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles"></a>

```csharp
public bool|IResolvable CleanExpiredFiles { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberOfSnapshotsToRetain`<sup>Required</sup> <a name="NumberOfSnapshotsToRetain" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain"></a>

```csharp
public double NumberOfSnapshotsToRetain { get; }
```

- *Type:* double

---

##### `SnapshotRetentionPeriodInDays`<sup>Required</sup> <a name="SnapshotRetentionPeriodInDays" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays"></a>

```csharp
public double SnapshotRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration">PutIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resetIcebergConfiguration">ResetIcebergConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcebergConfiguration` <a name="PutIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration"></a>

```csharp
private void PutIcebergConfiguration(GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.putIcebergConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---

##### `ResetIcebergConfiguration` <a name="ResetIcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resetIcebergConfiguration"></a>

```csharp
private void ResetIcebergConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration">IcebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfigurationInput">IcebergConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcebergConfiguration`<sup>Required</sup> <a name="IcebergConfiguration" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration"></a>

```csharp
public GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference IcebergConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a>

---

##### `IcebergConfigurationInput`<sup>Optional</sup> <a name="IcebergConfigurationInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfigurationInput"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration IcebergConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">GlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---


### GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference <a name="GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resetGlueConnectionName">ResetGlueConnectionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlueConnectionName` <a name="ResetGlueConnectionName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resetGlueConnectionName"></a>

```csharp
private void ResetGlueConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionNameInput">GlueConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName">GlueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueConnectionNameInput`<sup>Optional</sup> <a name="GlueConnectionNameInput" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionNameInput"></a>

```csharp
public string GlueConnectionNameInput { get; }
```

- *Type:* string

---

##### `GlueConnectionName`<sup>Required</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName"></a>

```csharp
public string GlueConnectionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueTableOptimizer.GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">GlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---



