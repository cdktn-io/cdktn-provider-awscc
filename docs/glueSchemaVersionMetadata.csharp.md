# `glueSchemaVersionMetadata` Submodule <a name="`glueSchemaVersionMetadata` Submodule" id="@cdktn/provider-awscc.glueSchemaVersionMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueSchemaVersionMetadata <a name="GlueSchemaVersionMetadata" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_schema_version_metadata awscc_glue_schema_version_metadata}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSchemaVersionMetadata(Construct Scope, string Id, GlueSchemaVersionMetadataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig">GlueSchemaVersionMetadataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig">GlueSchemaVersionMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueSchemaVersionMetadata resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueSchemaVersionMetadata.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueSchemaVersionMetadata.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueSchemaVersionMetadata.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueSchemaVersionMetadata.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueSchemaVersionMetadata resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueSchemaVersionMetadata to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueSchemaVersionMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_schema_version_metadata#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueSchemaVersionMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.schemaVersionIdInput">SchemaVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.schemaVersionId">SchemaVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `SchemaVersionIdInput`<sup>Optional</sup> <a name="SchemaVersionIdInput" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.schemaVersionIdInput"></a>

```csharp
public string SchemaVersionIdInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `SchemaVersionId`<sup>Required</sup> <a name="SchemaVersionId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.schemaVersionId"></a>

```csharp
public string SchemaVersionId { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadata.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueSchemaVersionMetadataConfig <a name="GlueSchemaVersionMetadataConfig" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSchemaVersionMetadataConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Key,
    string SchemaVersionId,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.key">Key</a></code> | <code>string</code> | Metadata key. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.schemaVersionId">SchemaVersionId</a></code> | <code>string</code> | Represents the version ID associated with the schema version. |
| <code><a href="#@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.value">Value</a></code> | <code>string</code> | Metadata value. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Metadata key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_schema_version_metadata#key GlueSchemaVersionMetadata#key}

---

##### `SchemaVersionId`<sup>Required</sup> <a name="SchemaVersionId" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.schemaVersionId"></a>

```csharp
public string SchemaVersionId { get; set; }
```

- *Type:* string

Represents the version ID associated with the schema version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_schema_version_metadata#schema_version_id GlueSchemaVersionMetadata#schema_version_id}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueSchemaVersionMetadata.GlueSchemaVersionMetadataConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Metadata value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_schema_version_metadata#value GlueSchemaVersionMetadata#value}

---



