# `entityresolutionSchemaMapping` Submodule <a name="`entityresolutionSchemaMapping` Submodule" id="@cdktn/provider-awscc.entityresolutionSchemaMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionSchemaMapping <a name="EntityresolutionSchemaMapping" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping awscc_entityresolution_schema_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionSchemaMapping(Construct Scope, string Id, EntityresolutionSchemaMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig">EntityresolutionSchemaMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig">EntityresolutionSchemaMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields">PutMappedInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMappedInputFields` <a name="PutMappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields"></a>

```csharp
private void PutMappedInputFields(IResolvable|EntityresolutionSchemaMappingMappedInputFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags"></a>

```csharp
private void PutTags(IResolvable|EntityresolutionSchemaMappingTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionSchemaMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionSchemaMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionSchemaMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionSchemaMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EntityresolutionSchemaMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EntityresolutionSchemaMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionSchemaMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.hasWorkflows">HasWorkflows</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFields">MappedInputFields</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList">EntityresolutionSchemaMappingMappedInputFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaArn">SchemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList">EntityresolutionSchemaMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFieldsInput">MappedInputFieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `HasWorkflows`<sup>Required</sup> <a name="HasWorkflows" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.hasWorkflows"></a>

```csharp
public IResolvable HasWorkflows { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MappedInputFields`<sup>Required</sup> <a name="MappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFields"></a>

```csharp
public EntityresolutionSchemaMappingMappedInputFieldsList MappedInputFields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList">EntityresolutionSchemaMappingMappedInputFieldsList</a>

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaArn"></a>

```csharp
public string SchemaArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tags"></a>

```csharp
public EntityresolutionSchemaMappingTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList">EntityresolutionSchemaMappingTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MappedInputFieldsInput`<sup>Optional</sup> <a name="MappedInputFieldsInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFieldsInput"></a>

```csharp
public IResolvable|EntityresolutionSchemaMappingMappedInputFields[] MappedInputFieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tagsInput"></a>

```csharp
public IResolvable|EntityresolutionSchemaMappingTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionSchemaMappingConfig <a name="EntityresolutionSchemaMappingConfig" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionSchemaMappingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|EntityresolutionSchemaMappingMappedInputFields[] MappedInputFields,
    string SchemaName,
    string Description = null,
    IResolvable|EntityresolutionSchemaMappingTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.mappedInputFields">MappedInputFields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]</code> | The SchemaMapping attributes input. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | The name of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.description">Description</a></code> | <code>string</code> | The description of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MappedInputFields`<sup>Required</sup> <a name="MappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.mappedInputFields"></a>

```csharp
public IResolvable|EntityresolutionSchemaMappingMappedInputFields[] MappedInputFields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]

The SchemaMapping attributes input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#mapped_input_fields EntityresolutionSchemaMapping#mapped_input_fields}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

The name of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#schema_name EntityresolutionSchemaMapping#schema_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#description EntityresolutionSchemaMapping#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.tags"></a>

```csharp
public IResolvable|EntityresolutionSchemaMappingTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}.

---

### EntityresolutionSchemaMappingMappedInputFields <a name="EntityresolutionSchemaMappingMappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionSchemaMappingMappedInputFields {
    string FieldName,
    string Type,
    string GroupName = null,
    bool|IResolvable Hashed = null,
    string MatchKey = null,
    string SubType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.fieldName">FieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#field_name EntityresolutionSchemaMapping#field_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#type EntityresolutionSchemaMapping#type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#group_name EntityresolutionSchemaMapping#group_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.hashed">Hashed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#hashed EntityresolutionSchemaMapping#hashed}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.matchKey">MatchKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#match_key EntityresolutionSchemaMapping#match_key}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.subType">SubType</a></code> | <code>string</code> | The subtype of the Attribute. Would be required only when type is PROVIDER_ID. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#field_name EntityresolutionSchemaMapping#field_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#type EntityresolutionSchemaMapping#type}.

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#group_name EntityresolutionSchemaMapping#group_name}.

---

##### `Hashed`<sup>Optional</sup> <a name="Hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.hashed"></a>

```csharp
public bool|IResolvable Hashed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#hashed EntityresolutionSchemaMapping#hashed}.

---

##### `MatchKey`<sup>Optional</sup> <a name="MatchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.matchKey"></a>

```csharp
public string MatchKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#match_key EntityresolutionSchemaMapping#match_key}.

---

##### `SubType`<sup>Optional</sup> <a name="SubType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.subType"></a>

```csharp
public string SubType { get; set; }
```

- *Type:* string

The subtype of the Attribute. Would be required only when type is PROVIDER_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#sub_type EntityresolutionSchemaMapping#sub_type}

---

### EntityresolutionSchemaMappingTags <a name="EntityresolutionSchemaMappingTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionSchemaMappingTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#key EntityresolutionSchemaMapping#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/entityresolution_schema_mapping#value EntityresolutionSchemaMapping#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionSchemaMappingMappedInputFieldsList <a name="EntityresolutionSchemaMappingMappedInputFieldsList" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionSchemaMappingMappedInputFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get"></a>

```csharp
private EntityresolutionSchemaMappingMappedInputFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionSchemaMappingMappedInputFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>[]

---


### EntityresolutionSchemaMappingMappedInputFieldsOutputReference <a name="EntityresolutionSchemaMappingMappedInputFieldsOutputReference" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionSchemaMappingMappedInputFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetHashed">ResetHashed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetMatchKey">ResetMatchKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetSubType">ResetSubType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetHashed` <a name="ResetHashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetHashed"></a>

```csharp
private void ResetHashed()
```

##### `ResetMatchKey` <a name="ResetMatchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetMatchKey"></a>

```csharp
private void ResetMatchKey()
```

##### `ResetSubType` <a name="ResetSubType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetSubType"></a>

```csharp
private void ResetSubType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashedInput">HashedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKeyInput">MatchKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subTypeInput">SubTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed">Hashed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey">MatchKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType">SubType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `HashedInput`<sup>Optional</sup> <a name="HashedInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashedInput"></a>

```csharp
public bool|IResolvable HashedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchKeyInput`<sup>Optional</sup> <a name="MatchKeyInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKeyInput"></a>

```csharp
public string MatchKeyInput { get; }
```

- *Type:* string

---

##### `SubTypeInput`<sup>Optional</sup> <a name="SubTypeInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subTypeInput"></a>

```csharp
public string SubTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Hashed`<sup>Required</sup> <a name="Hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed"></a>

```csharp
public bool|IResolvable Hashed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchKey`<sup>Required</sup> <a name="MatchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey"></a>

```csharp
public string MatchKey { get; }
```

- *Type:* string

---

##### `SubType`<sup>Required</sup> <a name="SubType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType"></a>

```csharp
public string SubType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionSchemaMappingMappedInputFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>

---


### EntityresolutionSchemaMappingTagsList <a name="EntityresolutionSchemaMappingTagsList" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionSchemaMappingTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get"></a>

```csharp
private EntityresolutionSchemaMappingTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionSchemaMappingTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>[]

---


### EntityresolutionSchemaMappingTagsOutputReference <a name="EntityresolutionSchemaMappingTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionSchemaMappingTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionSchemaMappingTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>

---



