# `glueConnection` Submodule <a name="`glueConnection` Submodule" id="@cdktn/provider-awscc.glueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueConnection <a name="GlueConnection" id="@cdktn/provider-awscc.glueConnection.GlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection awscc_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnection(Construct Scope, string Id, GlueConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig">GlueConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig">GlueConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput">PutConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueConnection.GlueConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueConnection.GlueConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueConnection.GlueConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionInput` <a name="PutConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput"></a>

```csharp
private void PutConnectionInput(GlueConnectionConnectionInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueConnection.GlueConnection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInput">ConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference">GlueConnectionConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInputInput">ConnectionInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tags">Tags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionInput`<sup>Required</sup> <a name="ConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInput"></a>

```csharp
public GlueConnectionConnectionInputOutputReference ConnectionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference">GlueConnectionConnectionInputOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ConnectionInputInput`<sup>Optional</sup> <a name="ConnectionInputInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInputInput"></a>

```csharp
public IResolvable|GlueConnectionConnectionInput ConnectionInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueConnectionConfig <a name="GlueConnectionConfig" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CatalogId,
    GlueConnectionConnectionInput ConnectionInput,
    string Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | The ID of the data catalog to create the catalog object in. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connectionInput">ConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a></code> | The connection properties used for this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.tags">Tags</a></code> | <code>string</code> | The collection of tags. Each tag element is associated with a given resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The ID of the data catalog to create the catalog object in.

Currently, this should be the AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}

---

##### `ConnectionInput`<sup>Required</sup> <a name="ConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connectionInput"></a>

```csharp
public GlueConnectionConnectionInput ConnectionInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

The connection properties used for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_input GlueConnection#connection_input}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#tags GlueConnection#tags}

---

### GlueConnectionConnectionInput <a name="GlueConnectionConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInput {
    string ConnectionType,
    string AthenaProperties = null,
    GlueConnectionConnectionInputAuthenticationConfiguration AuthenticationConfiguration = null,
    string ConnectionProperties = null,
    string Description = null,
    string[] MatchCriteria = null,
    string Name = null,
    GlueConnectionConnectionInputPhysicalConnectionRequirements PhysicalConnectionRequirements = null,
    string PythonProperties = null,
    string SparkProperties = null,
    bool|IResolvable ValidateCredentials = null,
    string[] ValidateForComputeEnvironments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionType">ConnectionType</a></code> | <code>string</code> | The type of the connection that needs to be created. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.athenaProperties">AthenaProperties</a></code> | <code>string</code> | Connection properties specific to the Athena compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a></code> | The authentication configuration used to connect to the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionProperties">ConnectionProperties</a></code> | <code>string</code> | A map of key-value pairs used as parameters for this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.description">Description</a></code> | <code>string</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.matchCriteria">MatchCriteria</a></code> | <code>string[]</code> | A list of criteria that can be used in selecting this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.name">Name</a></code> | <code>string</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a></code> | The physical connection requirements. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.pythonProperties">PythonProperties</a></code> | <code>string</code> | Connection properties specific to the Python compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.sparkProperties">SparkProperties</a></code> | <code>string</code> | Connection properties specific to the Spark compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateCredentials">ValidateCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag to validate the credentials during create connection. Default is true. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateForComputeEnvironments">ValidateForComputeEnvironments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_for_compute_environments GlueConnection#validate_for_compute_environments}. |

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

The type of the connection that needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}

---

##### `AthenaProperties`<sup>Optional</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.athenaProperties"></a>

```csharp
public string AthenaProperties { get; set; }
```

- *Type:* string

Connection properties specific to the Athena compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}

---

##### `AuthenticationConfiguration`<sup>Optional</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.authenticationConfiguration"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfiguration AuthenticationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

The authentication configuration used to connect to the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `ConnectionProperties`<sup>Optional</sup> <a name="ConnectionProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionProperties"></a>

```csharp
public string ConnectionProperties { get; set; }
```

- *Type:* string

A map of key-value pairs used as parameters for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#description GlueConnection#description}

---

##### `MatchCriteria`<sup>Optional</sup> <a name="MatchCriteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.matchCriteria"></a>

```csharp
public string[] MatchCriteria { get; set; }
```

- *Type:* string[]

A list of criteria that can be used in selecting this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#name GlueConnection#name}

---

##### `PhysicalConnectionRequirements`<sup>Optional</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.physicalConnectionRequirements"></a>

```csharp
public GlueConnectionConnectionInputPhysicalConnectionRequirements PhysicalConnectionRequirements { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

The physical connection requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `PythonProperties`<sup>Optional</sup> <a name="PythonProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.pythonProperties"></a>

```csharp
public string PythonProperties { get; set; }
```

- *Type:* string

Connection properties specific to the Python compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#python_properties GlueConnection#python_properties}

---

##### `SparkProperties`<sup>Optional</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.sparkProperties"></a>

```csharp
public string SparkProperties { get; set; }
```

- *Type:* string

Connection properties specific to the Spark compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#spark_properties GlueConnection#spark_properties}

---

##### `ValidateCredentials`<sup>Optional</sup> <a name="ValidateCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateCredentials"></a>

```csharp
public bool|IResolvable ValidateCredentials { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag to validate the credentials during create connection. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_credentials GlueConnection#validate_credentials}

---

##### `ValidateForComputeEnvironments`<sup>Optional</sup> <a name="ValidateForComputeEnvironments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateForComputeEnvironments"></a>

```csharp
public string[] ValidateForComputeEnvironments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_for_compute_environments GlueConnection#validate_for_compute_environments}.

---

### GlueConnectionConnectionInputAuthenticationConfiguration <a name="GlueConnectionConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfiguration {
    string AuthenticationType = null,
    GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentials = null,
    string CustomAuthenticationCredentials = null,
    string KmsKeyArn = null,
    GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties OAuth2Properties = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | A structure containing the authentication configuration in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | For supplying basic auth credentials when not providing a SecretArn value. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>string</code> | A structure containing the authentication credentials in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the KMS key used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.oAuth2Properties">OAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | A structure containing properties for OAuth2 in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.secretArn">SecretArn</a></code> | <code>string</code> | The secret manager ARN to store credentials in the CreateConnection request. |

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

A structure containing the authentication configuration in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}

---

##### `BasicAuthenticationCredentials`<sup>Optional</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

For supplying basic auth credentials when not providing a SecretArn value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

##### `CustomAuthenticationCredentials`<sup>Optional</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```csharp
public string CustomAuthenticationCredentials { get; set; }
```

- *Type:* string

A structure containing the authentication credentials in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the KMS key used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}

---

##### `OAuth2Properties`<sup>Optional</sup> <a name="OAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.oAuth2Properties"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties OAuth2Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

A structure containing properties for OAuth2 in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_properties GlueConnection#o_auth_2_properties}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The secret manager ARN to store credentials in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}

---

### GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials {
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password">Password</a></code> | <code>string</code> | The password used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.username">Username</a></code> | <code>string</code> | The username used in the authentication configuration. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#password GlueConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#username GlueConnection#username}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties {
    GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties AuthorizationCodeProperties = null,
    GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication OAuth2ClientApplication = null,
    GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials OAuth2Credentials = null,
    string OAuth2GrantType = null,
    string TokenUrl = null,
    string TokenUrlParametersMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | The set of properties required for the the OAuth2 AUTHORIZATION_CODE grant type workflow. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication">OAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | The OAuth2 client app used for the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials">OAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | A structure containing the OAuth2 credentials used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType">OAuth2GrantType</a></code> | <code>string</code> | The grant type used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | The URL used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>string</code> | A map of key-value pairs used in the authentication configuration. |

---

##### `AuthorizationCodeProperties`<sup>Optional</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties AuthorizationCodeProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

The set of properties required for the the OAuth2 AUTHORIZATION_CODE grant type workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

##### `OAuth2ClientApplication`<sup>Optional</sup> <a name="OAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication OAuth2ClientApplication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

The OAuth2 client app used for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_client_application GlueConnection#o_auth_2_client_application}

---

##### `OAuth2Credentials`<sup>Optional</sup> <a name="OAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials OAuth2Credentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

A structure containing the OAuth2 credentials used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_credentials GlueConnection#o_auth_2_credentials}

---

##### `OAuth2GrantType`<sup>Optional</sup> <a name="OAuth2GrantType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType"></a>

```csharp
public string OAuth2GrantType { get; set; }
```

- *Type:* string

The grant type used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_grant_type GlueConnection#o_auth_2_grant_type}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

The URL used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url GlueConnection#token_url}

---

##### `TokenUrlParametersMap`<sup>Optional</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap"></a>

```csharp
public string TokenUrlParametersMap { get; set; }
```

- *Type:* string

A map of key-value pairs used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties {
    string AuthorizationCode = null,
    string RedirectUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode">AuthorizationCode</a></code> | <code>string</code> | The authorization code used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri">RedirectUri</a></code> | <code>string</code> | The redirect URI where the user gets redirected to by authorization server when issuing an authorization code. |

---

##### `AuthorizationCode`<sup>Optional</sup> <a name="AuthorizationCode" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```csharp
public string AuthorizationCode { get; set; }
```

- *Type:* string

The authorization code used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}

---

##### `RedirectUri`<sup>Optional</sup> <a name="RedirectUri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```csharp
public string RedirectUri { get; set; }
```

- *Type:* string

The redirect URI where the user gets redirected to by authorization server when issuing an authorization code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication {
    string AwsManagedClientApplicationReference = null,
    string UserManagedClientApplicationClientId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>string</code> | The reference to the SaaS-side client app that is AWS managed. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>string</code> | The client application clientID if the ClientAppType is USER_MANAGED. |

---

##### `AwsManagedClientApplicationReference`<sup>Optional</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```csharp
public string AwsManagedClientApplicationReference { get; set; }
```

- *Type:* string

The reference to the SaaS-side client app that is AWS managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}

---

##### `UserManagedClientApplicationClientId`<sup>Optional</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```csharp
public string UserManagedClientApplicationClientId { get; set; }
```

- *Type:* string

The client application clientID if the ClientAppType is USER_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials {
    string AccessToken = null,
    string JwtToken = null,
    string RefreshToken = null,
    string UserManagedClientApplicationClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken">AccessToken</a></code> | <code>string</code> | The access token used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken">JwtToken</a></code> | <code>string</code> | The JSON Web Token (JWT) used when the authentication type is OAuth2. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken">RefreshToken</a></code> | <code>string</code> | The refresh token used when the authentication type is OAuth2. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>string</code> | The client application client secret if the client application is user managed. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

The access token used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#access_token GlueConnection#access_token}

---

##### `JwtToken`<sup>Optional</sup> <a name="JwtToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken"></a>

```csharp
public string JwtToken { get; set; }
```

- *Type:* string

The JSON Web Token (JWT) used when the authentication type is OAuth2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken"></a>

```csharp
public string RefreshToken { get; set; }
```

- *Type:* string

The refresh token used when the authentication type is OAuth2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}

---

##### `UserManagedClientApplicationClientSecret`<sup>Optional</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```csharp
public string UserManagedClientApplicationClientSecret { get; set; }
```

- *Type:* string

The client application client secret if the client application is user managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}

---

### GlueConnectionConnectionInputPhysicalConnectionRequirements <a name="GlueConnectionConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputPhysicalConnectionRequirements {
    string AvailabilityZone = null,
    string[] SecurityGroupIdList = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The availability zone where the connection is located. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | The security group ID list used by the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.subnetId">SubnetId</a></code> | <code>string</code> | The subnet ID used by the connection. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The availability zone where the connection is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}

---

##### `SecurityGroupIdList`<sup>Optional</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; set; }
```

- *Type:* string[]

The security group ID list used by the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The subnet ID used by the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode">ResetAuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri">ResetRedirectUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationCode` <a name="ResetAuthorizationCode" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode"></a>

```csharp
private void ResetAuthorizationCode()
```

##### `ResetRedirectUri` <a name="ResetRedirectUri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri"></a>

```csharp
private void ResetRedirectUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">AuthorizationCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">AuthorizationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCodeInput`<sup>Optional</sup> <a name="AuthorizationCodeInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```csharp
public string AuthorizationCodeInput { get; }
```

- *Type:* string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```csharp
public string RedirectUriInput { get; }
```

- *Type:* string

---

##### `AuthorizationCode`<sup>Required</sup> <a name="AuthorizationCode" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```csharp
public string AuthorizationCode { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">ResetAwsManagedClientApplicationReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">ResetUserManagedClientApplicationClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsManagedClientApplicationReference` <a name="ResetAwsManagedClientApplicationReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```csharp
private void ResetAwsManagedClientApplicationReference()
```

##### `ResetUserManagedClientApplicationClientId` <a name="ResetUserManagedClientApplicationClientId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```csharp
private void ResetUserManagedClientApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">AwsManagedClientApplicationReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">UserManagedClientApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsManagedClientApplicationReferenceInput`<sup>Optional</sup> <a name="AwsManagedClientApplicationReferenceInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```csharp
public string AwsManagedClientApplicationReferenceInput { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientIdInput`<sup>Optional</sup> <a name="UserManagedClientApplicationClientIdInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```csharp
public string UserManagedClientApplicationClientIdInput { get; }
```

- *Type:* string

---

##### `AwsManagedClientApplicationReference`<sup>Required</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```csharp
public string AwsManagedClientApplicationReference { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientId`<sup>Required</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```csharp
public string UserManagedClientApplicationClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken">ResetJwtToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">ResetUserManagedClientApplicationClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetJwtToken` <a name="ResetJwtToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken"></a>

```csharp
private void ResetJwtToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken"></a>

```csharp
private void ResetRefreshToken()
```

##### `ResetUserManagedClientApplicationClientSecret` <a name="ResetUserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```csharp
private void ResetUserManagedClientApplicationClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput">JwtTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">UserManagedClientApplicationClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">JwtToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `JwtTokenInput`<sup>Optional</sup> <a name="JwtTokenInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput"></a>

```csharp
public string JwtTokenInput { get; }
```

- *Type:* string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput"></a>

```csharp
public string RefreshTokenInput { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientSecretInput`<sup>Optional</sup> <a name="UserManagedClientApplicationClientSecretInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```csharp
public string UserManagedClientApplicationClientSecretInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `JwtToken`<sup>Required</sup> <a name="JwtToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```csharp
public string JwtToken { get; }
```

- *Type:* string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```csharp
public string RefreshToken { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientSecret`<sup>Required</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```csharp
public string UserManagedClientApplicationClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties">PutAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication">PutOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials">PutOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties">ResetAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication">ResetOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials">ResetOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType">ResetOAuth2GrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap">ResetTokenUrlParametersMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationCodeProperties` <a name="PutAuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```csharp
private void PutAuthorizationCodeProperties(GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `PutOAuth2ClientApplication` <a name="PutOAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication"></a>

```csharp
private void PutOAuth2ClientApplication(GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `PutOAuth2Credentials` <a name="PutOAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials"></a>

```csharp
private void PutOAuth2Credentials(GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `ResetAuthorizationCodeProperties` <a name="ResetAuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```csharp
private void ResetAuthorizationCodeProperties()
```

##### `ResetOAuth2ClientApplication` <a name="ResetOAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication"></a>

```csharp
private void ResetOAuth2ClientApplication()
```

##### `ResetOAuth2Credentials` <a name="ResetOAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials"></a>

```csharp
private void ResetOAuth2Credentials()
```

##### `ResetOAuth2GrantType` <a name="ResetOAuth2GrantType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType"></a>

```csharp
private void ResetOAuth2GrantType()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```

##### `ResetTokenUrlParametersMap` <a name="ResetTokenUrlParametersMap" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```csharp
private void ResetTokenUrlParametersMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">OAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">OAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput">AuthorizationCodePropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput">OAuth2ClientApplicationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput">OAuth2CredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput">OAuth2GrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput">TokenUrlParametersMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">OAuth2GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCodeProperties`<sup>Required</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference AuthorizationCodeProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `OAuth2ClientApplication`<sup>Required</sup> <a name="OAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference OAuth2ClientApplication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `OAuth2Credentials`<sup>Required</sup> <a name="OAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference OAuth2Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `AuthorizationCodePropertiesInput`<sup>Optional</sup> <a name="AuthorizationCodePropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties AuthorizationCodePropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `OAuth2ClientApplicationInput`<sup>Optional</sup> <a name="OAuth2ClientApplicationInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication OAuth2ClientApplicationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `OAuth2CredentialsInput`<sup>Optional</sup> <a name="OAuth2CredentialsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials OAuth2CredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `OAuth2GrantTypeInput`<sup>Optional</sup> <a name="OAuth2GrantTypeInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput"></a>

```csharp
public string OAuth2GrantTypeInput { get; }
```

- *Type:* string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `TokenUrlParametersMapInput`<sup>Optional</sup> <a name="TokenUrlParametersMapInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```csharp
public string TokenUrlParametersMapInput { get; }
```

- *Type:* string

---

##### `OAuth2GrantType`<sup>Required</sup> <a name="OAuth2GrantType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```csharp
public string OAuth2GrantType { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `TokenUrlParametersMap`<sup>Required</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```csharp
public string TokenUrlParametersMap { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### GlueConnectionConnectionInputAuthenticationConfigurationOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">PutBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties">PutOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">ResetBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">ResetCustomAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties">ResetOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuthenticationCredentials` <a name="PutBasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```csharp
private void PutBasicAuthenticationCredentials(GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `PutOAuth2Properties` <a name="PutOAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties"></a>

```csharp
private void PutOAuth2Properties(GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetBasicAuthenticationCredentials` <a name="ResetBasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```csharp
private void ResetBasicAuthenticationCredentials()
```

##### `ResetCustomAuthenticationCredentials` <a name="ResetCustomAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```csharp
private void ResetCustomAuthenticationCredentials()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetOAuth2Properties` <a name="ResetOAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties"></a>

```csharp
private void ResetOAuth2Properties()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">OAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">BasicAuthenticationCredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">CustomAuthenticationCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput">OAuth2PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuthenticationCredentials`<sup>Required</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference BasicAuthenticationCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `OAuth2Properties`<sup>Required</sup> <a name="OAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference OAuth2Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `BasicAuthenticationCredentialsInput`<sup>Optional</sup> <a name="BasicAuthenticationCredentialsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials BasicAuthenticationCredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `CustomAuthenticationCredentialsInput`<sup>Optional</sup> <a name="CustomAuthenticationCredentialsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```csharp
public string CustomAuthenticationCredentialsInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `OAuth2PropertiesInput`<sup>Optional</sup> <a name="OAuth2PropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties OAuth2PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `CustomAuthenticationCredentials`<sup>Required</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```csharp
public string CustomAuthenticationCredentials { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

---


### GlueConnectionConnectionInputOutputReference <a name="GlueConnectionConnectionInputOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements">PutPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAthenaProperties">ResetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAuthenticationConfiguration">ResetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetConnectionProperties">ResetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetMatchCriteria">ResetMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPhysicalConnectionRequirements">ResetPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPythonProperties">ResetPythonProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetSparkProperties">ResetSparkProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateCredentials">ResetValidateCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateForComputeEnvironments">ResetValidateForComputeEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration"></a>

```csharp
private void PutAuthenticationConfiguration(GlueConnectionConnectionInputAuthenticationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

---

##### `PutPhysicalConnectionRequirements` <a name="PutPhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements"></a>

```csharp
private void PutPhysicalConnectionRequirements(GlueConnectionConnectionInputPhysicalConnectionRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

---

##### `ResetAthenaProperties` <a name="ResetAthenaProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAthenaProperties"></a>

```csharp
private void ResetAthenaProperties()
```

##### `ResetAuthenticationConfiguration` <a name="ResetAuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAuthenticationConfiguration"></a>

```csharp
private void ResetAuthenticationConfiguration()
```

##### `ResetConnectionProperties` <a name="ResetConnectionProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetConnectionProperties"></a>

```csharp
private void ResetConnectionProperties()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMatchCriteria` <a name="ResetMatchCriteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetMatchCriteria"></a>

```csharp
private void ResetMatchCriteria()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPhysicalConnectionRequirements` <a name="ResetPhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPhysicalConnectionRequirements"></a>

```csharp
private void ResetPhysicalConnectionRequirements()
```

##### `ResetPythonProperties` <a name="ResetPythonProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPythonProperties"></a>

```csharp
private void ResetPythonProperties()
```

##### `ResetSparkProperties` <a name="ResetSparkProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetSparkProperties"></a>

```csharp
private void ResetSparkProperties()
```

##### `ResetValidateCredentials` <a name="ResetValidateCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateCredentials"></a>

```csharp
private void ResetValidateCredentials()
```

##### `ResetValidateForComputeEnvironments` <a name="ResetValidateForComputeEnvironments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateForComputeEnvironments"></a>

```csharp
private void ResetValidateForComputeEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference">GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaPropertiesInput">AthenaPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionPropertiesInput">ConnectionPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteriaInput">MatchCriteriaInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirementsInput">PhysicalConnectionRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonPropertiesInput">PythonPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkPropertiesInput">SparkPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentialsInput">ValidateCredentialsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironmentsInput">ValidateForComputeEnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaProperties">AthenaProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionProperties">ConnectionProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteria">MatchCriteria</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonProperties">PythonProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkProperties">SparkProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentials">ValidateCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironments">ValidateForComputeEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfiguration"></a>

```csharp
public GlueConnectionConnectionInputAuthenticationConfigurationOutputReference AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `PhysicalConnectionRequirements`<sup>Required</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```csharp
public GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference PhysicalConnectionRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference">GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `AthenaPropertiesInput`<sup>Optional</sup> <a name="AthenaPropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaPropertiesInput"></a>

```csharp
public string AthenaPropertiesInput { get; }
```

- *Type:* string

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfigurationInput"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputAuthenticationConfiguration AuthenticationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

---

##### `ConnectionPropertiesInput`<sup>Optional</sup> <a name="ConnectionPropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionPropertiesInput"></a>

```csharp
public string ConnectionPropertiesInput { get; }
```

- *Type:* string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MatchCriteriaInput`<sup>Optional</sup> <a name="MatchCriteriaInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteriaInput"></a>

```csharp
public string[] MatchCriteriaInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhysicalConnectionRequirementsInput`<sup>Optional</sup> <a name="PhysicalConnectionRequirementsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirementsInput"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputPhysicalConnectionRequirements PhysicalConnectionRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

---

##### `PythonPropertiesInput`<sup>Optional</sup> <a name="PythonPropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonPropertiesInput"></a>

```csharp
public string PythonPropertiesInput { get; }
```

- *Type:* string

---

##### `SparkPropertiesInput`<sup>Optional</sup> <a name="SparkPropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkPropertiesInput"></a>

```csharp
public string SparkPropertiesInput { get; }
```

- *Type:* string

---

##### `ValidateCredentialsInput`<sup>Optional</sup> <a name="ValidateCredentialsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentialsInput"></a>

```csharp
public bool|IResolvable ValidateCredentialsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidateForComputeEnvironmentsInput`<sup>Optional</sup> <a name="ValidateForComputeEnvironmentsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironmentsInput"></a>

```csharp
public string[] ValidateForComputeEnvironmentsInput { get; }
```

- *Type:* string[]

---

##### `AthenaProperties`<sup>Required</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaProperties"></a>

```csharp
public string AthenaProperties { get; }
```

- *Type:* string

---

##### `ConnectionProperties`<sup>Required</sup> <a name="ConnectionProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionProperties"></a>

```csharp
public string ConnectionProperties { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteria"></a>

```csharp
public string[] MatchCriteria { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PythonProperties`<sup>Required</sup> <a name="PythonProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonProperties"></a>

```csharp
public string PythonProperties { get; }
```

- *Type:* string

---

##### `SparkProperties`<sup>Required</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkProperties"></a>

```csharp
public string SparkProperties { get; }
```

- *Type:* string

---

##### `ValidateCredentials`<sup>Required</sup> <a name="ValidateCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentials"></a>

```csharp
public bool|IResolvable ValidateCredentials { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidateForComputeEnvironments`<sup>Required</sup> <a name="ValidateForComputeEnvironments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```csharp
public string[] ValidateForComputeEnvironments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueConnectionConnectionInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

---


### GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference <a name="GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">ResetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetSecurityGroupIdList` <a name="ResetSecurityGroupIdList" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```csharp
private void ResetSecurityGroupIdList()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">SecurityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdListInput`<sup>Optional</sup> <a name="SecurityGroupIdListInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```csharp
public string[] SecurityGroupIdListInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueConnectionConnectionInputPhysicalConnectionRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

---



