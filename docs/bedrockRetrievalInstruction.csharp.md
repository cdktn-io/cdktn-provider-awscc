# `bedrockRetrievalInstruction` Submodule <a name="`bedrockRetrievalInstruction` Submodule" id="@cdktn/provider-awscc.bedrockRetrievalInstruction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockRetrievalInstruction <a name="BedrockRetrievalInstruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction awscc_bedrock_retrieval_instruction}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockRetrievalInstruction(Construct Scope, string Id, BedrockRetrievalInstructionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig">BedrockRetrievalInstructionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig">BedrockRetrievalInstructionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction">PutInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetCustomerEncryptionKeyArn">ResetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstruction` <a name="PutInstruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction"></a>

```csharp
private void PutInstruction(BedrockRetrievalInstructionInstruction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockRetrievalInstructionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>[]

---

##### `ResetCustomerEncryptionKeyArn` <a name="ResetCustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetCustomerEncryptionKeyArn"></a>

```csharp
private void ResetCustomerEncryptionKeyArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockRetrievalInstruction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockRetrievalInstruction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockRetrievalInstruction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockRetrievalInstruction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockRetrievalInstruction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockRetrievalInstruction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockRetrievalInstruction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instruction">Instruction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference">BedrockRetrievalInstructionInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lastTransitionStatus">LastTransitionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.retrievalInstructionId">RetrievalInstructionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList">BedrockRetrievalInstructionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArnInput">CustomerEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instructionInput">InstructionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instruction"></a>

```csharp
public BedrockRetrievalInstructionInstructionOutputReference Instruction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference">BedrockRetrievalInstructionInstructionOutputReference</a>

---

##### `LastTransitionStatus`<sup>Required</sup> <a name="LastTransitionStatus" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.lastTransitionStatus"></a>

```csharp
public string LastTransitionStatus { get; }
```

- *Type:* string

---

##### `RetrievalInstructionId`<sup>Required</sup> <a name="RetrievalInstructionId" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.retrievalInstructionId"></a>

```csharp
public string RetrievalInstructionId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tags"></a>

```csharp
public BedrockRetrievalInstructionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList">BedrockRetrievalInstructionTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `CustomerEncryptionKeyArnInput`<sup>Optional</sup> <a name="CustomerEncryptionKeyArnInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArnInput"></a>

```csharp
public string CustomerEncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.instructionInput"></a>

```csharp
public IResolvable|BedrockRetrievalInstructionInstruction InstructionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tagsInput"></a>

```csharp
public IResolvable|BedrockRetrievalInstructionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>[]

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.customerEncryptionKeyArn"></a>

```csharp
public string CustomerEncryptionKeyArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstruction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockRetrievalInstructionConfig <a name="BedrockRetrievalInstructionConfig" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockRetrievalInstructionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BedrockRetrievalInstructionInstruction Instruction,
    string Name,
    string CustomerEncryptionKeyArn = null,
    string Description = null,
    IResolvable|BedrockRetrievalInstructionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.instruction">Instruction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | The reviewed content this instruction serves ? |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.name">Name</a></code> | <code>string</code> | The name of the retrieval instruction. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>string</code> | The ARN of the customer managed KMS key protecting this content, when one was supplied at create. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.description">Description</a></code> | <code>string</code> | A description of the retrieval instruction. On a numbered version, the description of that version. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.instruction"></a>

```csharp
public BedrockRetrievalInstructionInstruction Instruction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

The reviewed content this instruction serves ?

what AgenticRetrieveStream resolves while status is ACTIVE. Absent until the first create review passes. Always present on a numbered version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#instruction BedrockRetrievalInstruction#instruction}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the retrieval instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#name BedrockRetrievalInstruction#name}

---

##### `CustomerEncryptionKeyArn`<sup>Optional</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.customerEncryptionKeyArn"></a>

```csharp
public string CustomerEncryptionKeyArn { get; set; }
```

- *Type:* string

The ARN of the customer managed KMS key protecting this content, when one was supplied at create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#customer_encryption_key_arn BedrockRetrievalInstruction#customer_encryption_key_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the retrieval instruction. On a numbered version, the description of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#description BedrockRetrievalInstruction#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionConfig.property.tags"></a>

```csharp
public IResolvable|BedrockRetrievalInstructionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#tags BedrockRetrievalInstruction#tags}

---

### BedrockRetrievalInstructionInstruction <a name="BedrockRetrievalInstructionInstruction" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockRetrievalInstructionInstruction {
    string AnswerFormat = null,
    string AnswerPolicy = null,
    string Persona = null,
    string RetrievalGuidance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerFormat">AnswerFormat</a></code> | <code>string</code> | How the answer is structured, including how sources are cited. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerPolicy">AnswerPolicy</a></code> | <code>string</code> | Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.persona">Persona</a></code> | <code>string</code> | Who the assistant is: identity, tone and language. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.retrievalGuidance">RetrievalGuidance</a></code> | <code>string</code> | How to interpret and decompose the question, and what to prioritise when searching. |

---

##### `AnswerFormat`<sup>Optional</sup> <a name="AnswerFormat" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerFormat"></a>

```csharp
public string AnswerFormat { get; set; }
```

- *Type:* string

How the answer is structured, including how sources are cited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#answer_format BedrockRetrievalInstruction#answer_format}

---

##### `AnswerPolicy`<sup>Optional</sup> <a name="AnswerPolicy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.answerPolicy"></a>

```csharp
public string AnswerPolicy { get; set; }
```

- *Type:* string

Whether and how to answer: how strongly an answer must be supported, and what to do with questions outside scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#answer_policy BedrockRetrievalInstruction#answer_policy}

---

##### `Persona`<sup>Optional</sup> <a name="Persona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.persona"></a>

```csharp
public string Persona { get; set; }
```

- *Type:* string

Who the assistant is: identity, tone and language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#persona BedrockRetrievalInstruction#persona}

---

##### `RetrievalGuidance`<sup>Optional</sup> <a name="RetrievalGuidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction.property.retrievalGuidance"></a>

```csharp
public string RetrievalGuidance { get; set; }
```

- *Type:* string

How to interpret and decompose the question, and what to prioritise when searching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#retrieval_guidance BedrockRetrievalInstruction#retrieval_guidance}

---

### BedrockRetrievalInstructionTags <a name="BedrockRetrievalInstructionTags" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockRetrievalInstructionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#key BedrockRetrievalInstruction#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/bedrock_retrieval_instruction#value BedrockRetrievalInstruction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockRetrievalInstructionInstructionOutputReference <a name="BedrockRetrievalInstructionInstructionOutputReference" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockRetrievalInstructionInstructionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerFormat">ResetAnswerFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerPolicy">ResetAnswerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetPersona">ResetPersona</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetRetrievalGuidance">ResetRetrievalGuidance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnswerFormat` <a name="ResetAnswerFormat" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerFormat"></a>

```csharp
private void ResetAnswerFormat()
```

##### `ResetAnswerPolicy` <a name="ResetAnswerPolicy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetAnswerPolicy"></a>

```csharp
private void ResetAnswerPolicy()
```

##### `ResetPersona` <a name="ResetPersona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetPersona"></a>

```csharp
private void ResetPersona()
```

##### `ResetRetrievalGuidance` <a name="ResetRetrievalGuidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.resetRetrievalGuidance"></a>

```csharp
private void ResetRetrievalGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormatInput">AnswerFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicyInput">AnswerPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.personaInput">PersonaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidanceInput">RetrievalGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormat">AnswerFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy">AnswerPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.persona">Persona</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance">RetrievalGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerFormatInput`<sup>Optional</sup> <a name="AnswerFormatInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormatInput"></a>

```csharp
public string AnswerFormatInput { get; }
```

- *Type:* string

---

##### `AnswerPolicyInput`<sup>Optional</sup> <a name="AnswerPolicyInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicyInput"></a>

```csharp
public string AnswerPolicyInput { get; }
```

- *Type:* string

---

##### `PersonaInput`<sup>Optional</sup> <a name="PersonaInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.personaInput"></a>

```csharp
public string PersonaInput { get; }
```

- *Type:* string

---

##### `RetrievalGuidanceInput`<sup>Optional</sup> <a name="RetrievalGuidanceInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidanceInput"></a>

```csharp
public string RetrievalGuidanceInput { get; }
```

- *Type:* string

---

##### `AnswerFormat`<sup>Required</sup> <a name="AnswerFormat" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerFormat"></a>

```csharp
public string AnswerFormat { get; }
```

- *Type:* string

---

##### `AnswerPolicy`<sup>Required</sup> <a name="AnswerPolicy" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy"></a>

```csharp
public string AnswerPolicy { get; }
```

- *Type:* string

---

##### `Persona`<sup>Required</sup> <a name="Persona" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.persona"></a>

```csharp
public string Persona { get; }
```

- *Type:* string

---

##### `RetrievalGuidance`<sup>Required</sup> <a name="RetrievalGuidance" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance"></a>

```csharp
public string RetrievalGuidance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstructionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockRetrievalInstructionInstruction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionInstruction">BedrockRetrievalInstructionInstruction</a>

---


### BedrockRetrievalInstructionTagsList <a name="BedrockRetrievalInstructionTagsList" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockRetrievalInstructionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get"></a>

```csharp
private BedrockRetrievalInstructionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockRetrievalInstructionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>[]

---


### BedrockRetrievalInstructionTagsOutputReference <a name="BedrockRetrievalInstructionTagsOutputReference" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockRetrievalInstructionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockRetrievalInstructionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockRetrievalInstruction.BedrockRetrievalInstructionTags">BedrockRetrievalInstructionTags</a>

---



