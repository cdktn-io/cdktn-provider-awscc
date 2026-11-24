# `opensearchmemorySpace` Submodule <a name="`opensearchmemorySpace` Submodule" id="@cdktn/provider-awscc.opensearchmemorySpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchmemorySpace <a name="OpensearchmemorySpace" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space awscc_opensearchmemory_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpace(Construct Scope, string Id, OpensearchmemorySpaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig">OpensearchmemorySpaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig">OpensearchmemorySpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies">PutMemoryStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays">ResetEventExpiryDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId">ResetExtractionModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays">ResetMemoryExpiryDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies">ResetMemoryStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(OpensearchmemorySpaceEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---

##### `PutMemoryStrategies` <a name="PutMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies"></a>

```csharp
private void PutMemoryStrategies(IResolvable|OpensearchmemorySpaceMemoryStrategies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags"></a>

```csharp
private void PutTags(IResolvable|OpensearchmemorySpaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetEventExpiryDays` <a name="ResetEventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays"></a>

```csharp
private void ResetEventExpiryDays()
```

##### `ResetExtractionModelId` <a name="ResetExtractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId"></a>

```csharp
private void ResetExtractionModelId()
```

##### `ResetMemoryExpiryDays` <a name="ResetMemoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays"></a>

```csharp
private void ResetMemoryExpiryDays()
```

##### `ResetMemoryStrategies` <a name="ResetMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies"></a>

```csharp
private void ResetMemoryStrategies()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchmemorySpace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchmemorySpace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchmemorySpace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OpensearchmemorySpace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchmemorySpace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchmemorySpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchmemorySpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies">MemoryStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId">SpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput">EventExpiryDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput">ExtractionModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput">MemoryExpiryDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput">MemoryStrategiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays">EventExpiryDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId">ExtractionModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays">MemoryExpiryDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration"></a>

```csharp
public OpensearchmemorySpaceEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemoryStrategies`<sup>Required</sup> <a name="MemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies"></a>

```csharp
public OpensearchmemorySpaceMemoryStrategiesList MemoryStrategies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a>

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId"></a>

```csharp
public string SpaceId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags"></a>

```csharp
public OpensearchmemorySpaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|OpensearchmemorySpaceEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---

##### `EventExpiryDaysInput`<sup>Optional</sup> <a name="EventExpiryDaysInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput"></a>

```csharp
public double EventExpiryDaysInput { get; }
```

- *Type:* double

---

##### `ExtractionModelIdInput`<sup>Optional</sup> <a name="ExtractionModelIdInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput"></a>

```csharp
public string ExtractionModelIdInput { get; }
```

- *Type:* string

---

##### `MemoryExpiryDaysInput`<sup>Optional</sup> <a name="MemoryExpiryDaysInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput"></a>

```csharp
public double MemoryExpiryDaysInput { get; }
```

- *Type:* double

---

##### `MemoryStrategiesInput`<sup>Optional</sup> <a name="MemoryStrategiesInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput"></a>

```csharp
public IResolvable|OpensearchmemorySpaceMemoryStrategies[] MemoryStrategiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput"></a>

```csharp
public IResolvable|OpensearchmemorySpaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]

---

##### `EventExpiryDays`<sup>Required</sup> <a name="EventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays"></a>

```csharp
public double EventExpiryDays { get; }
```

- *Type:* double

---

##### `ExtractionModelId`<sup>Required</sup> <a name="ExtractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId"></a>

```csharp
public string ExtractionModelId { get; }
```

- *Type:* string

---

##### `MemoryExpiryDays`<sup>Required</sup> <a name="MemoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays"></a>

```csharp
public double MemoryExpiryDays { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchmemorySpaceConfig <a name="OpensearchmemorySpaceConfig" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    OpensearchmemorySpaceEncryptionConfiguration EncryptionConfiguration = null,
    double EventExpiryDays = null,
    string ExtractionModelId = null,
    double MemoryExpiryDays = null,
    IResolvable|OpensearchmemorySpaceMemoryStrategies[] MemoryStrategies = null,
    IResolvable|OpensearchmemorySpaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays">EventExpiryDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId">ExtractionModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays">MemoryExpiryDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies">MemoryStrategies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration"></a>

```csharp
public OpensearchmemorySpaceEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}.

---

##### `EventExpiryDays`<sup>Optional</sup> <a name="EventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays"></a>

```csharp
public double EventExpiryDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}.

---

##### `ExtractionModelId`<sup>Optional</sup> <a name="ExtractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId"></a>

```csharp
public string ExtractionModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}.

---

##### `MemoryExpiryDays`<sup>Optional</sup> <a name="MemoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays"></a>

```csharp
public double MemoryExpiryDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}.

---

##### `MemoryStrategies`<sup>Optional</sup> <a name="MemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies"></a>

```csharp
public IResolvable|OpensearchmemorySpaceMemoryStrategies[] MemoryStrategies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags"></a>

```csharp
public IResolvable|OpensearchmemorySpaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#tags OpensearchmemorySpace#tags}

---

### OpensearchmemorySpaceEncryptionConfiguration <a name="OpensearchmemorySpaceEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceEncryptionConfiguration {
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}.

---

### OpensearchmemorySpaceMemoryStrategies <a name="OpensearchmemorySpaceMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceMemoryStrategies {
    OpensearchmemorySpaceMemoryStrategiesConfiguration Configuration = null,
    string Description = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}. |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration"></a>

```csharp
public OpensearchmemorySpaceMemoryStrategiesConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}.

---

### OpensearchmemorySpaceMemoryStrategiesConfiguration <a name="OpensearchmemorySpaceMemoryStrategiesConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceMemoryStrategiesConfiguration {
    bool|IResolvable ConsolidationEnabled = null,
    double ExtractEveryNMessages = null,
    double ExtractEveryNTokens = null,
    string ExtractionPrompt = null,
    double ExtractionSeedRecentN = null,
    double ExtractionSeedTopK = null,
    double IdleTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled">ConsolidationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages">ExtractEveryNMessages</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens">ExtractEveryNTokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt">ExtractionPrompt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN">ExtractionSeedRecentN</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK">ExtractionSeedTopK</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds">IdleTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}. |

---

##### `ConsolidationEnabled`<sup>Optional</sup> <a name="ConsolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled"></a>

```csharp
public bool|IResolvable ConsolidationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}.

---

##### `ExtractEveryNMessages`<sup>Optional</sup> <a name="ExtractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages"></a>

```csharp
public double ExtractEveryNMessages { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}.

---

##### `ExtractEveryNTokens`<sup>Optional</sup> <a name="ExtractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens"></a>

```csharp
public double ExtractEveryNTokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}.

---

##### `ExtractionPrompt`<sup>Optional</sup> <a name="ExtractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt"></a>

```csharp
public string ExtractionPrompt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}.

---

##### `ExtractionSeedRecentN`<sup>Optional</sup> <a name="ExtractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN"></a>

```csharp
public double ExtractionSeedRecentN { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}.

---

##### `ExtractionSeedTopK`<sup>Optional</sup> <a name="ExtractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK"></a>

```csharp
public double ExtractionSeedTopK { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}.

---

##### `IdleTimeoutSeconds`<sup>Optional</sup> <a name="IdleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds"></a>

```csharp
public double IdleTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}.

---

### OpensearchmemorySpaceTags <a name="OpensearchmemorySpaceTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#key OpensearchmemorySpace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#value OpensearchmemorySpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchmemorySpaceEncryptionConfigurationOutputReference <a name="OpensearchmemorySpaceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchmemorySpaceEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---


### OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled">ResetConsolidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages">ResetExtractEveryNMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens">ResetExtractEveryNTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt">ResetExtractionPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN">ResetExtractionSeedRecentN</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK">ResetExtractionSeedTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds">ResetIdleTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConsolidationEnabled` <a name="ResetConsolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled"></a>

```csharp
private void ResetConsolidationEnabled()
```

##### `ResetExtractEveryNMessages` <a name="ResetExtractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages"></a>

```csharp
private void ResetExtractEveryNMessages()
```

##### `ResetExtractEveryNTokens` <a name="ResetExtractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens"></a>

```csharp
private void ResetExtractEveryNTokens()
```

##### `ResetExtractionPrompt` <a name="ResetExtractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt"></a>

```csharp
private void ResetExtractionPrompt()
```

##### `ResetExtractionSeedRecentN` <a name="ResetExtractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN"></a>

```csharp
private void ResetExtractionSeedRecentN()
```

##### `ResetExtractionSeedTopK` <a name="ResetExtractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK"></a>

```csharp
private void ResetExtractionSeedTopK()
```

##### `ResetIdleTimeoutSeconds` <a name="ResetIdleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds"></a>

```csharp
private void ResetIdleTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput">ConsolidationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput">ExtractEveryNMessagesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput">ExtractEveryNTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput">ExtractionPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput">ExtractionSeedRecentNInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput">ExtractionSeedTopKInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput">IdleTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled">ConsolidationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages">ExtractEveryNMessages</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens">ExtractEveryNTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt">ExtractionPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN">ExtractionSeedRecentN</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK">ExtractionSeedTopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds">IdleTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsolidationEnabledInput`<sup>Optional</sup> <a name="ConsolidationEnabledInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput"></a>

```csharp
public bool|IResolvable ConsolidationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExtractEveryNMessagesInput`<sup>Optional</sup> <a name="ExtractEveryNMessagesInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput"></a>

```csharp
public double ExtractEveryNMessagesInput { get; }
```

- *Type:* double

---

##### `ExtractEveryNTokensInput`<sup>Optional</sup> <a name="ExtractEveryNTokensInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput"></a>

```csharp
public double ExtractEveryNTokensInput { get; }
```

- *Type:* double

---

##### `ExtractionPromptInput`<sup>Optional</sup> <a name="ExtractionPromptInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput"></a>

```csharp
public string ExtractionPromptInput { get; }
```

- *Type:* string

---

##### `ExtractionSeedRecentNInput`<sup>Optional</sup> <a name="ExtractionSeedRecentNInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput"></a>

```csharp
public double ExtractionSeedRecentNInput { get; }
```

- *Type:* double

---

##### `ExtractionSeedTopKInput`<sup>Optional</sup> <a name="ExtractionSeedTopKInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput"></a>

```csharp
public double ExtractionSeedTopKInput { get; }
```

- *Type:* double

---

##### `IdleTimeoutSecondsInput`<sup>Optional</sup> <a name="IdleTimeoutSecondsInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput"></a>

```csharp
public double IdleTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ConsolidationEnabled`<sup>Required</sup> <a name="ConsolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled"></a>

```csharp
public bool|IResolvable ConsolidationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExtractEveryNMessages`<sup>Required</sup> <a name="ExtractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages"></a>

```csharp
public double ExtractEveryNMessages { get; }
```

- *Type:* double

---

##### `ExtractEveryNTokens`<sup>Required</sup> <a name="ExtractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens"></a>

```csharp
public double ExtractEveryNTokens { get; }
```

- *Type:* double

---

##### `ExtractionPrompt`<sup>Required</sup> <a name="ExtractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt"></a>

```csharp
public string ExtractionPrompt { get; }
```

- *Type:* string

---

##### `ExtractionSeedRecentN`<sup>Required</sup> <a name="ExtractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN"></a>

```csharp
public double ExtractionSeedRecentN { get; }
```

- *Type:* double

---

##### `ExtractionSeedTopK`<sup>Required</sup> <a name="ExtractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK"></a>

```csharp
public double ExtractionSeedTopK { get; }
```

- *Type:* double

---

##### `IdleTimeoutSeconds`<sup>Required</sup> <a name="IdleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds"></a>

```csharp
public double IdleTimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchmemorySpaceMemoryStrategiesConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---


### OpensearchmemorySpaceMemoryStrategiesList <a name="OpensearchmemorySpaceMemoryStrategiesList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceMemoryStrategiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get"></a>

```csharp
private OpensearchmemorySpaceMemoryStrategiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue"></a>

```csharp
public IResolvable|OpensearchmemorySpaceMemoryStrategies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>[]

---


### OpensearchmemorySpaceMemoryStrategiesOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceMemoryStrategiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration"></a>

```csharp
private void PutConfiguration(OpensearchmemorySpaceMemoryStrategiesConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration"></a>

```csharp
public OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput"></a>

```csharp
public IResolvable|OpensearchmemorySpaceMemoryStrategiesConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchmemorySpaceMemoryStrategies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>

---


### OpensearchmemorySpaceTagsList <a name="OpensearchmemorySpaceTagsList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get"></a>

```csharp
private OpensearchmemorySpaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|OpensearchmemorySpaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>[]

---


### OpensearchmemorySpaceTagsOutputReference <a name="OpensearchmemorySpaceTagsOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OpensearchmemorySpaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpensearchmemorySpaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>

---



