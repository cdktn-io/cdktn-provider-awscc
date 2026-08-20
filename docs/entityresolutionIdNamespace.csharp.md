# `entityresolutionIdNamespace` Submodule <a name="`entityresolutionIdNamespace` Submodule" id="@cdktn/provider-awscc.entityresolutionIdNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionIdNamespace <a name="EntityresolutionIdNamespace" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace awscc_entityresolution_id_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespace(Construct Scope, string Id, EntityresolutionIdNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig">EntityresolutionIdNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig">EntityresolutionIdNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putIdMappingWorkflowProperties">PutIdMappingWorkflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putInputSourceConfig">PutInputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetIdMappingWorkflowProperties">ResetIdMappingWorkflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetInputSourceConfig">ResetInputSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdMappingWorkflowProperties` <a name="PutIdMappingWorkflowProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putIdMappingWorkflowProperties"></a>

```csharp
private void PutIdMappingWorkflowProperties(IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowProperties[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putIdMappingWorkflowProperties.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>[]

---

##### `PutInputSourceConfig` <a name="PutInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putInputSourceConfig"></a>

```csharp
private void PutInputSourceConfig(IResolvable|EntityresolutionIdNamespaceInputSourceConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putInputSourceConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putTags"></a>

```csharp
private void PutTags(IResolvable|EntityresolutionIdNamespaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIdMappingWorkflowProperties` <a name="ResetIdMappingWorkflowProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetIdMappingWorkflowProperties"></a>

```csharp
private void ResetIdMappingWorkflowProperties()
```

##### `ResetInputSourceConfig` <a name="ResetInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetInputSourceConfig"></a>

```csharp
private void ResetInputSourceConfig()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionIdNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionIdNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionIdNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EntityresolutionIdNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EntityresolutionIdNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EntityresolutionIdNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionIdNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idMappingWorkflowProperties">IdMappingWorkflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceArn">IdNamespaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.inputSourceConfig">InputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList">EntityresolutionIdNamespaceInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList">EntityresolutionIdNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idMappingWorkflowPropertiesInput">IdMappingWorkflowPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceNameInput">IdNamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.inputSourceConfigInput">InputSourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceName">IdNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdMappingWorkflowProperties`<sup>Required</sup> <a name="IdMappingWorkflowProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idMappingWorkflowProperties"></a>

```csharp
public EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList IdMappingWorkflowProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList</a>

---

##### `IdNamespaceArn`<sup>Required</sup> <a name="IdNamespaceArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceArn"></a>

```csharp
public string IdNamespaceArn { get; }
```

- *Type:* string

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.inputSourceConfig"></a>

```csharp
public EntityresolutionIdNamespaceInputSourceConfigList InputSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList">EntityresolutionIdNamespaceInputSourceConfigList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tags"></a>

```csharp
public EntityresolutionIdNamespaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList">EntityresolutionIdNamespaceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdMappingWorkflowPropertiesInput`<sup>Optional</sup> <a name="IdMappingWorkflowPropertiesInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idMappingWorkflowPropertiesInput"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowProperties[] IdMappingWorkflowPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>[]

---

##### `IdNamespaceNameInput`<sup>Optional</sup> <a name="IdNamespaceNameInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceNameInput"></a>

```csharp
public string IdNamespaceNameInput { get; }
```

- *Type:* string

---

##### `InputSourceConfigInput`<sup>Optional</sup> <a name="InputSourceConfigInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.inputSourceConfigInput"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceInputSourceConfig[] InputSourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tagsInput"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IdNamespaceName`<sup>Required</sup> <a name="IdNamespaceName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.idNamespaceName"></a>

```csharp
public string IdNamespaceName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionIdNamespaceConfig <a name="EntityresolutionIdNamespaceConfig" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IdNamespaceName,
    string Type,
    string Description = null,
    IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowProperties[] IdMappingWorkflowProperties = null,
    IResolvable|EntityresolutionIdNamespaceInputSourceConfig[] InputSourceConfig = null,
    string RoleArn = null,
    IResolvable|EntityresolutionIdNamespaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.idNamespaceName">IdNamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_namespace_name EntityresolutionIdNamespace#id_namespace_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#type EntityresolutionIdNamespace#type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#description EntityresolutionIdNamespace#description}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.idMappingWorkflowProperties">IdMappingWorkflowProperties</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_mapping_workflow_properties EntityresolutionIdNamespace#id_mapping_workflow_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.inputSourceConfig">InputSourceConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#input_source_config EntityresolutionIdNamespace#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#role_arn EntityresolutionIdNamespace#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#tags EntityresolutionIdNamespace#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdNamespaceName`<sup>Required</sup> <a name="IdNamespaceName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.idNamespaceName"></a>

```csharp
public string IdNamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_namespace_name EntityresolutionIdNamespace#id_namespace_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#type EntityresolutionIdNamespace#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#description EntityresolutionIdNamespace#description}.

---

##### `IdMappingWorkflowProperties`<sup>Optional</sup> <a name="IdMappingWorkflowProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.idMappingWorkflowProperties"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowProperties[] IdMappingWorkflowProperties { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_mapping_workflow_properties EntityresolutionIdNamespace#id_mapping_workflow_properties}.

---

##### `InputSourceConfig`<sup>Optional</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.inputSourceConfig"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceInputSourceConfig[] InputSourceConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#input_source_config EntityresolutionIdNamespace#input_source_config}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#role_arn EntityresolutionIdNamespace#role_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceConfig.property.tags"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#tags EntityresolutionIdNamespace#tags}.

---

### EntityresolutionIdNamespaceIdMappingWorkflowProperties <a name="EntityresolutionIdNamespaceIdMappingWorkflowProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowProperties {
    string IdMappingType = null,
    EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties ProviderProperties = null,
    EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties RuleBasedProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.idMappingType">IdMappingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_mapping_type EntityresolutionIdNamespace#id_mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#provider_properties EntityresolutionIdNamespace#provider_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_based_properties EntityresolutionIdNamespace#rule_based_properties}. |

---

##### `IdMappingType`<sup>Optional</sup> <a name="IdMappingType" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.idMappingType"></a>

```csharp
public string IdMappingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#id_mapping_type EntityresolutionIdNamespace#id_mapping_type}.

---

##### `ProviderProperties`<sup>Optional</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.providerProperties"></a>

```csharp
public EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties ProviderProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#provider_properties EntityresolutionIdNamespace#provider_properties}.

---

##### `RuleBasedProperties`<sup>Optional</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties.property.ruleBasedProperties"></a>

```csharp
public EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties RuleBasedProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_based_properties EntityresolutionIdNamespace#rule_based_properties}.

---

### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties {
    System.Collections.Generic.IDictionary<string, string> ProviderConfiguration = null,
    string ProviderServiceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.property.providerConfiguration">ProviderConfiguration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.property.providerServiceArn">ProviderServiceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#provider_service_arn EntityresolutionIdNamespace#provider_service_arn}. |

---

##### `ProviderConfiguration`<sup>Optional</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.property.providerConfiguration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfiguration { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#provider_configuration EntityresolutionIdNamespace#provider_configuration}

---

##### `ProviderServiceArn`<sup>Optional</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.property.providerServiceArn"></a>

```csharp
public string ProviderServiceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#provider_service_arn EntityresolutionIdNamespace#provider_service_arn}.

---

### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties {
    string AttributeMatchingModel = null,
    string[] RecordMatchingModels = null,
    string[] RuleDefinitionTypes = null,
    IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules[] Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#attribute_matching_model EntityresolutionIdNamespace#attribute_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.recordMatchingModels">RecordMatchingModels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#record_matching_models EntityresolutionIdNamespace#record_matching_models}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.ruleDefinitionTypes">RuleDefinitionTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_definition_types EntityresolutionIdNamespace#rule_definition_types}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rules EntityresolutionIdNamespace#rules}. |

---

##### `AttributeMatchingModel`<sup>Optional</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.attributeMatchingModel"></a>

```csharp
public string AttributeMatchingModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#attribute_matching_model EntityresolutionIdNamespace#attribute_matching_model}.

---

##### `RecordMatchingModels`<sup>Optional</sup> <a name="RecordMatchingModels" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.recordMatchingModels"></a>

```csharp
public string[] RecordMatchingModels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#record_matching_models EntityresolutionIdNamespace#record_matching_models}.

---

##### `RuleDefinitionTypes`<sup>Optional</sup> <a name="RuleDefinitionTypes" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.ruleDefinitionTypes"></a>

```csharp
public string[] RuleDefinitionTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_definition_types EntityresolutionIdNamespace#rule_definition_types}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.property.rules"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rules EntityresolutionIdNamespace#rules}.

---

### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules {
    string[] MatchingKeys = null,
    string RuleName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.property.matchingKeys">MatchingKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#matching_keys EntityresolutionIdNamespace#matching_keys}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_name EntityresolutionIdNamespace#rule_name}. |

---

##### `MatchingKeys`<sup>Optional</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.property.matchingKeys"></a>

```csharp
public string[] MatchingKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#matching_keys EntityresolutionIdNamespace#matching_keys}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#rule_name EntityresolutionIdNamespace#rule_name}.

---

### EntityresolutionIdNamespaceInputSourceConfig <a name="EntityresolutionIdNamespaceInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceInputSourceConfig {
    string InputSourceArn = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.property.inputSourceArn">InputSourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#input_source_arn EntityresolutionIdNamespace#input_source_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#schema_name EntityresolutionIdNamespace#schema_name}. |

---

##### `InputSourceArn`<sup>Optional</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.property.inputSourceArn"></a>

```csharp
public string InputSourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#input_source_arn EntityresolutionIdNamespace#input_source_arn}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#schema_name EntityresolutionIdNamespace#schema_name}.

---

### EntityresolutionIdNamespaceTags <a name="EntityresolutionIdNamespaceTags" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#key EntityresolutionIdNamespace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_namespace#value EntityresolutionIdNamespace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get"></a>

```csharp
private EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowProperties[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>[]

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putProviderProperties">PutProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties">PutRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetIdMappingType">ResetIdMappingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetProviderProperties">ResetProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetRuleBasedProperties">ResetRuleBasedProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderProperties` <a name="PutProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putProviderProperties"></a>

```csharp
private void PutProviderProperties(EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putProviderProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

---

##### `PutRuleBasedProperties` <a name="PutRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties"></a>

```csharp
private void PutRuleBasedProperties(EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.putRuleBasedProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

---

##### `ResetIdMappingType` <a name="ResetIdMappingType" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetIdMappingType"></a>

```csharp
private void ResetIdMappingType()
```

##### `ResetProviderProperties` <a name="ResetProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetProviderProperties"></a>

```csharp
private void ResetProviderProperties()
```

##### `ResetRuleBasedProperties` <a name="ResetRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resetRuleBasedProperties"></a>

```csharp
private void ResetRuleBasedProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingTypeInput">IdMappingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerPropertiesInput">ProviderPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedPropertiesInput">RuleBasedPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingType">IdMappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderProperties`<sup>Required</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerProperties"></a>

```csharp
public EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference ProviderProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference</a>

---

##### `RuleBasedProperties`<sup>Required</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedProperties"></a>

```csharp
public EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference RuleBasedProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference</a>

---

##### `IdMappingTypeInput`<sup>Optional</sup> <a name="IdMappingTypeInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingTypeInput"></a>

```csharp
public string IdMappingTypeInput { get; }
```

- *Type:* string

---

##### `ProviderPropertiesInput`<sup>Optional</sup> <a name="ProviderPropertiesInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerPropertiesInput"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties ProviderPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

---

##### `RuleBasedPropertiesInput`<sup>Optional</sup> <a name="RuleBasedPropertiesInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedPropertiesInput"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties RuleBasedPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

---

##### `IdMappingType`<sup>Required</sup> <a name="IdMappingType" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingType"></a>

```csharp
public string IdMappingType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowProperties">EntityresolutionIdNamespaceIdMappingWorkflowProperties</a>

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resetProviderConfiguration">ResetProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resetProviderServiceArn">ResetProviderServiceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProviderConfiguration` <a name="ResetProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resetProviderConfiguration"></a>

```csharp
private void ResetProviderConfiguration()
```

##### `ResetProviderServiceArn` <a name="ResetProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resetProviderServiceArn"></a>

```csharp
private void ResetProviderServiceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfigurationInput">ProviderConfigurationInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArnInput">ProviderServiceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfiguration">ProviderConfiguration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArn">ProviderServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderConfigurationInput`<sup>Optional</sup> <a name="ProviderConfigurationInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfigurationInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfigurationInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProviderServiceArnInput`<sup>Optional</sup> <a name="ProviderServiceArnInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArnInput"></a>

```csharp
public string ProviderServiceArnInput { get; }
```

- *Type:* string

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProviderConfiguration { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProviderServiceArn`<sup>Required</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```csharp
public string ProviderServiceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel">ResetAttributeMatchingModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRecordMatchingModels">ResetRecordMatchingModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRuleDefinitionTypes">ResetRuleDefinitionTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>[]

---

##### `ResetAttributeMatchingModel` <a name="ResetAttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel"></a>

```csharp
private void ResetAttributeMatchingModel()
```

##### `ResetRecordMatchingModels` <a name="ResetRecordMatchingModels" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRecordMatchingModels"></a>

```csharp
private void ResetRecordMatchingModels()
```

##### `ResetRuleDefinitionTypes` <a name="ResetRuleDefinitionTypes" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRuleDefinitionTypes"></a>

```csharp
private void ResetRuleDefinitionTypes()
```

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput">AttributeMatchingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModelsInput">RecordMatchingModelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypesInput">RuleDefinitionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModels">RecordMatchingModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypes">RuleDefinitionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rules"></a>

```csharp
public EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList</a>

---

##### `AttributeMatchingModelInput`<sup>Optional</sup> <a name="AttributeMatchingModelInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput"></a>

```csharp
public string AttributeMatchingModelInput { get; }
```

- *Type:* string

---

##### `RecordMatchingModelsInput`<sup>Optional</sup> <a name="RecordMatchingModelsInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModelsInput"></a>

```csharp
public string[] RecordMatchingModelsInput { get; }
```

- *Type:* string[]

---

##### `RuleDefinitionTypesInput`<sup>Optional</sup> <a name="RuleDefinitionTypesInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypesInput"></a>

```csharp
public string[] RuleDefinitionTypesInput { get; }
```

- *Type:* string[]

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>[]

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```csharp
public string AttributeMatchingModel { get; }
```

- *Type:* string

---

##### `RecordMatchingModels`<sup>Required</sup> <a name="RecordMatchingModels" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModels"></a>

```csharp
public string[] RecordMatchingModels { get; }
```

- *Type:* string[]

---

##### `RuleDefinitionTypes`<sup>Required</sup> <a name="RuleDefinitionTypes" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypes"></a>

```csharp
public string[] RuleDefinitionTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get"></a>

```csharp
private EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>[]

---


### EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference <a name="EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys">ResetMatchingKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchingKeys` <a name="ResetMatchingKeys" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys"></a>

```csharp
private void ResetMatchingKeys()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resetRuleName"></a>

```csharp
private void ResetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput">MatchingKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">MatchingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchingKeysInput`<sup>Optional</sup> <a name="MatchingKeysInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput"></a>

```csharp
public string[] MatchingKeysInput { get; }
```

- *Type:* string[]

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `MatchingKeys`<sup>Required</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```csharp
public string[] MatchingKeys { get; }
```

- *Type:* string[]

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>

---


### EntityresolutionIdNamespaceInputSourceConfigList <a name="EntityresolutionIdNamespaceInputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceInputSourceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.get"></a>

```csharp
private EntityresolutionIdNamespaceInputSourceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceInputSourceConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>[]

---


### EntityresolutionIdNamespaceInputSourceConfigOutputReference <a name="EntityresolutionIdNamespaceInputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceInputSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resetInputSourceArn">ResetInputSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputSourceArn` <a name="ResetInputSourceArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resetInputSourceArn"></a>

```csharp
private void ResetInputSourceArn()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArnInput">InputSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArn">InputSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputSourceArnInput`<sup>Optional</sup> <a name="InputSourceArnInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArnInput"></a>

```csharp
public string InputSourceArnInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArn"></a>

```csharp
public string InputSourceArn { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceInputSourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceInputSourceConfig">EntityresolutionIdNamespaceInputSourceConfig</a>

---


### EntityresolutionIdNamespaceTagsList <a name="EntityresolutionIdNamespaceTagsList" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.get"></a>

```csharp
private EntityresolutionIdNamespaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>[]

---


### EntityresolutionIdNamespaceTagsOutputReference <a name="EntityresolutionIdNamespaceTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EntityresolutionIdNamespaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EntityresolutionIdNamespaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.entityresolutionIdNamespace.EntityresolutionIdNamespaceTags">EntityresolutionIdNamespaceTags</a>

---



