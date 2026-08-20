# `glueIntegrationResourceProperty` Submodule <a name="`glueIntegrationResourceProperty` Submodule" id="@cdktn/provider-awscc.glueIntegrationResourceProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegrationResourceProperty <a name="GlueIntegrationResourceProperty" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property awscc_glue_integration_resource_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourceProperty(Construct Scope, string Id, GlueIntegrationResourcePropertyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig">GlueIntegrationResourcePropertyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig">GlueIntegrationResourcePropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties">PutSourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties">PutTargetProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties">ResetSourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties">ResetTargetProcessingProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceProcessingProperties` <a name="PutSourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties"></a>

```csharp
private void PutSourceProcessingProperties(GlueIntegrationResourcePropertySourceProcessingProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags"></a>

```csharp
private void PutTags(IResolvable|GlueIntegrationResourcePropertyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]

---

##### `PutTargetProcessingProperties` <a name="PutTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties"></a>

```csharp
private void PutTargetProcessingProperties(GlueIntegrationResourcePropertyTargetProcessingProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---

##### `ResetSourceProcessingProperties` <a name="ResetSourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties"></a>

```csharp
private void ResetSourceProcessingProperties()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetProcessingProperties` <a name="ResetTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties"></a>

```csharp
private void ResetTargetProcessingProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueIntegrationResourceProperty.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueIntegrationResourceProperty.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueIntegrationResourceProperty.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueIntegrationResourceProperty.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueIntegrationResourceProperty to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueIntegrationResourceProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegrationResourceProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn">ResourcePropertyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties">SourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties">TargetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput">SourceProcessingPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput">TargetProcessingPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourcePropertyArn`<sup>Required</sup> <a name="ResourcePropertyArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn"></a>

```csharp
public string ResourcePropertyArn { get; }
```

- *Type:* string

---

##### `SourceProcessingProperties`<sup>Required</sup> <a name="SourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties"></a>

```csharp
public GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference SourceProcessingProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags"></a>

```csharp
public GlueIntegrationResourcePropertyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a>

---

##### `TargetProcessingProperties`<sup>Required</sup> <a name="TargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties"></a>

```csharp
public GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference TargetProcessingProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a>

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `SourceProcessingPropertiesInput`<sup>Optional</sup> <a name="SourceProcessingPropertiesInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput"></a>

```csharp
public IResolvable|GlueIntegrationResourcePropertySourceProcessingProperties SourceProcessingPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput"></a>

```csharp
public IResolvable|GlueIntegrationResourcePropertyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]

---

##### `TargetProcessingPropertiesInput`<sup>Optional</sup> <a name="TargetProcessingPropertiesInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput"></a>

```csharp
public IResolvable|GlueIntegrationResourcePropertyTargetProcessingProperties TargetProcessingPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationResourcePropertyConfig <a name="GlueIntegrationResourcePropertyConfig" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourcePropertyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceArn,
    GlueIntegrationResourcePropertySourceProcessingProperties SourceProcessingProperties = null,
    IResolvable|GlueIntegrationResourcePropertyTags[] Tags = null,
    GlueIntegrationResourcePropertyTargetProcessingProperties TargetProcessingProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn">ResourceArn</a></code> | <code>string</code> | The connection ARN of the source, or the database ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties">SourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | The resource properties associated with the integration source. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties">TargetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | The resource properties associated with the integration target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

The connection ARN of the source, or the database ARN of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#resource_arn GlueIntegrationResourceProperty#resource_arn}

---

##### `SourceProcessingProperties`<sup>Optional</sup> <a name="SourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties"></a>

```csharp
public GlueIntegrationResourcePropertySourceProcessingProperties SourceProcessingProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

The resource properties associated with the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#source_processing_properties GlueIntegrationResourceProperty#source_processing_properties}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags"></a>

```csharp
public IResolvable|GlueIntegrationResourcePropertyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#tags GlueIntegrationResourceProperty#tags}

---

##### `TargetProcessingProperties`<sup>Optional</sup> <a name="TargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties"></a>

```csharp
public GlueIntegrationResourcePropertyTargetProcessingProperties TargetProcessingProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

The resource properties associated with the integration target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#target_processing_properties GlueIntegrationResourceProperty#target_processing_properties}

---

### GlueIntegrationResourcePropertySourceProcessingProperties <a name="GlueIntegrationResourcePropertySourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourcePropertySourceProcessingProperties {
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn">RoleArn</a></code> | <code>string</code> | The IAM role to access the Glue connection. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The IAM role to access the Glue connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

### GlueIntegrationResourcePropertyTags <a name="GlueIntegrationResourcePropertyTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourcePropertyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#key GlueIntegrationResourceProperty#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#value GlueIntegrationResourceProperty#value}

---

### GlueIntegrationResourcePropertyTargetProcessingProperties <a name="GlueIntegrationResourcePropertyTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourcePropertyTargetProcessingProperties {
    string ConnectionName = null,
    string EventBusArn = null,
    string KmsArn = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName">ConnectionName</a></code> | <code>string</code> | The Glue network connection to configure the Glue job running in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | The ARN of an Eventbridge event bus to receive the integration status notification. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn">KmsArn</a></code> | <code>string</code> | The ARN of the KMS key used for encryption. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn">RoleArn</a></code> | <code>string</code> | The IAM role to access the Glue database. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The Glue network connection to configure the Glue job running in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#connection_name GlueIntegrationResourceProperty#connection_name}

---

##### `EventBusArn`<sup>Optional</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; set; }
```

- *Type:* string

The ARN of an Eventbridge event bus to receive the integration status notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#event_bus_arn GlueIntegrationResourceProperty#event_bus_arn}

---

##### `KmsArn`<sup>Optional</sup> <a name="KmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn"></a>

```csharp
public string KmsArn { get; set; }
```

- *Type:* string

The ARN of the KMS key used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#kms_arn GlueIntegrationResourceProperty#kms_arn}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The IAM role to access the Glue database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueIntegrationResourcePropertySourceProcessingProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---


### GlueIntegrationResourcePropertyTagsList <a name="GlueIntegrationResourcePropertyTagsList" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourcePropertyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get"></a>

```csharp
private GlueIntegrationResourcePropertyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue"></a>

```csharp
public IResolvable|GlueIntegrationResourcePropertyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>[]

---


### GlueIntegrationResourcePropertyTagsOutputReference <a name="GlueIntegrationResourcePropertyTagsOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourcePropertyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueIntegrationResourcePropertyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>

---


### GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn">ResetEventBusArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn">ResetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetEventBusArn` <a name="ResetEventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn"></a>

```csharp
private void ResetEventBusArn()
```

##### `ResetKmsArn` <a name="ResetKmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn"></a>

```csharp
private void ResetKmsArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput">EventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput">KmsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn">KmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput"></a>

```csharp
public string EventBusArnInput { get; }
```

- *Type:* string

---

##### `KmsArnInput`<sup>Optional</sup> <a name="KmsArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput"></a>

```csharp
public string KmsArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn"></a>

```csharp
public string KmsArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueIntegrationResourcePropertyTargetProcessingProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---



