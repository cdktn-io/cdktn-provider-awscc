# `iotfleetwiseStateTemplate` Submodule <a name="`iotfleetwiseStateTemplate` Submodule" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseStateTemplate <a name="IotfleetwiseStateTemplate" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template awscc_iotfleetwise_state_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseStateTemplate(Construct Scope, string Id, IotfleetwiseStateTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig">IotfleetwiseStateTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig">IotfleetwiseStateTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDataExtraDimensions">ResetDataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetMetadataExtraDimensions">ResetMetadataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags"></a>

```csharp
private void PutTags(IResolvable|IotfleetwiseStateTemplateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]

---

##### `ResetDataExtraDimensions` <a name="ResetDataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDataExtraDimensions"></a>

```csharp
private void ResetDataExtraDimensions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMetadataExtraDimensions` <a name="ResetMetadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetMetadataExtraDimensions"></a>

```csharp
private void ResetMetadataExtraDimensions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseStateTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseStateTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseStateTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseStateTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotfleetwiseStateTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotfleetwiseStateTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotfleetwiseStateTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotfleetwiseStateTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseStateTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lastModificationTime">LastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateId">StateTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList">IotfleetwiseStateTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensionsInput">DataExtraDimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensionsInput">MetadataExtraDimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArnInput">SignalCatalogArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplatePropertiesInput">StateTemplatePropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensions">DataExtraDimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensions">MetadataExtraDimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArn">SignalCatalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateProperties">StateTemplateProperties</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lastModificationTime"></a>

```csharp
public string LastModificationTime { get; }
```

- *Type:* string

---

##### `StateTemplateId`<sup>Required</sup> <a name="StateTemplateId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateId"></a>

```csharp
public string StateTemplateId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tags"></a>

```csharp
public IotfleetwiseStateTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList">IotfleetwiseStateTemplateTagsList</a>

---

##### `DataExtraDimensionsInput`<sup>Optional</sup> <a name="DataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensionsInput"></a>

```csharp
public string[] DataExtraDimensionsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MetadataExtraDimensionsInput`<sup>Optional</sup> <a name="MetadataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensionsInput"></a>

```csharp
public string[] MetadataExtraDimensionsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SignalCatalogArnInput`<sup>Optional</sup> <a name="SignalCatalogArnInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArnInput"></a>

```csharp
public string SignalCatalogArnInput { get; }
```

- *Type:* string

---

##### `StateTemplatePropertiesInput`<sup>Optional</sup> <a name="StateTemplatePropertiesInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplatePropertiesInput"></a>

```csharp
public string[] StateTemplatePropertiesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tagsInput"></a>

```csharp
public IResolvable|IotfleetwiseStateTemplateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]

---

##### `DataExtraDimensions`<sup>Required</sup> <a name="DataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensions"></a>

```csharp
public string[] DataExtraDimensions { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MetadataExtraDimensions`<sup>Required</sup> <a name="MetadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensions"></a>

```csharp
public string[] MetadataExtraDimensions { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SignalCatalogArn`<sup>Required</sup> <a name="SignalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArn"></a>

```csharp
public string SignalCatalogArn { get; }
```

- *Type:* string

---

##### `StateTemplateProperties`<sup>Required</sup> <a name="StateTemplateProperties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateProperties"></a>

```csharp
public string[] StateTemplateProperties { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseStateTemplateConfig <a name="IotfleetwiseStateTemplateConfig" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseStateTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string SignalCatalogArn,
    string[] StateTemplateProperties,
    string[] DataExtraDimensions = null,
    string Description = null,
    string[] MetadataExtraDimensions = null,
    IResolvable|IotfleetwiseStateTemplateTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.signalCatalogArn">SignalCatalogArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.stateTemplateProperties">StateTemplateProperties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dataExtraDimensions">DataExtraDimensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.metadataExtraDimensions">MetadataExtraDimensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}.

---

##### `SignalCatalogArn`<sup>Required</sup> <a name="SignalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.signalCatalogArn"></a>

```csharp
public string SignalCatalogArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}.

---

##### `StateTemplateProperties`<sup>Required</sup> <a name="StateTemplateProperties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.stateTemplateProperties"></a>

```csharp
public string[] StateTemplateProperties { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}.

---

##### `DataExtraDimensions`<sup>Optional</sup> <a name="DataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dataExtraDimensions"></a>

```csharp
public string[] DataExtraDimensions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}.

---

##### `MetadataExtraDimensions`<sup>Optional</sup> <a name="MetadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.metadataExtraDimensions"></a>

```csharp
public string[] MetadataExtraDimensions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.tags"></a>

```csharp
public IResolvable|IotfleetwiseStateTemplateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}.

---

### IotfleetwiseStateTemplateTags <a name="IotfleetwiseStateTemplateTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseStateTemplateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#key IotfleetwiseStateTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#value IotfleetwiseStateTemplate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#key IotfleetwiseStateTemplate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#value IotfleetwiseStateTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseStateTemplateTagsList <a name="IotfleetwiseStateTemplateTagsList" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseStateTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get"></a>

```csharp
private IotfleetwiseStateTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseStateTemplateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]

---


### IotfleetwiseStateTemplateTagsOutputReference <a name="IotfleetwiseStateTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotfleetwiseStateTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotfleetwiseStateTemplateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>

---



