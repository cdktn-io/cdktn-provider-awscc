# `bedrockApplicationInferenceProfile` Submodule <a name="`bedrockApplicationInferenceProfile` Submodule" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockApplicationInferenceProfile <a name="BedrockApplicationInferenceProfile" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile awscc_bedrock_application_inference_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfile(Construct Scope, string Id, BedrockApplicationInferenceProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig">BedrockApplicationInferenceProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig">BedrockApplicationInferenceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource">PutModelSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetModelSource">ResetModelSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutModelSource` <a name="PutModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource"></a>

```csharp
private void PutModelSource(BedrockApplicationInferenceProfileModelSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putModelSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockApplicationInferenceProfileTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetModelSource` <a name="ResetModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetModelSource"></a>

```csharp
private void ResetModelSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockApplicationInferenceProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockApplicationInferenceProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockApplicationInferenceProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockApplicationInferenceProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockApplicationInferenceProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockApplicationInferenceProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockApplicationInferenceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockApplicationInferenceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileArn">InferenceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileId">InferenceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileIdentifier">InferenceProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.models">Models</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList">BedrockApplicationInferenceProfileModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSource">ModelSource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference">BedrockApplicationInferenceProfileModelSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList">BedrockApplicationInferenceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileNameInput">InferenceProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSourceInput">ModelSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileName">InferenceProfileName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InferenceProfileArn`<sup>Required</sup> <a name="InferenceProfileArn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileArn"></a>

```csharp
public string InferenceProfileArn { get; }
```

- *Type:* string

---

##### `InferenceProfileId`<sup>Required</sup> <a name="InferenceProfileId" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileId"></a>

```csharp
public string InferenceProfileId { get; }
```

- *Type:* string

---

##### `InferenceProfileIdentifier`<sup>Required</sup> <a name="InferenceProfileIdentifier" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileIdentifier"></a>

```csharp
public string InferenceProfileIdentifier { get; }
```

- *Type:* string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.models"></a>

```csharp
public BedrockApplicationInferenceProfileModelsList Models { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList">BedrockApplicationInferenceProfileModelsList</a>

---

##### `ModelSource`<sup>Required</sup> <a name="ModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSource"></a>

```csharp
public BedrockApplicationInferenceProfileModelSourceOutputReference ModelSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference">BedrockApplicationInferenceProfileModelSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tags"></a>

```csharp
public BedrockApplicationInferenceProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList">BedrockApplicationInferenceProfileTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InferenceProfileNameInput`<sup>Optional</sup> <a name="InferenceProfileNameInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileNameInput"></a>

```csharp
public string InferenceProfileNameInput { get; }
```

- *Type:* string

---

##### `ModelSourceInput`<sup>Optional</sup> <a name="ModelSourceInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.modelSourceInput"></a>

```csharp
public IResolvable|BedrockApplicationInferenceProfileModelSource ModelSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tagsInput"></a>

```csharp
public IResolvable|BedrockApplicationInferenceProfileTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InferenceProfileName`<sup>Required</sup> <a name="InferenceProfileName" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.inferenceProfileName"></a>

```csharp
public string InferenceProfileName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockApplicationInferenceProfileConfig <a name="BedrockApplicationInferenceProfileConfig" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InferenceProfileName,
    string Description = null,
    BedrockApplicationInferenceProfileModelSource ModelSource = null,
    IResolvable|BedrockApplicationInferenceProfileTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.inferenceProfileName">InferenceProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.description">Description</a></code> | <code>string</code> | Description of the inference profile. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.modelSource">ModelSource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | Various ways to encode a list of models in a CreateInferenceProfile request. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]</code> | List of Tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InferenceProfileName`<sup>Required</sup> <a name="InferenceProfileName" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.inferenceProfileName"></a>

```csharp
public string InferenceProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#inference_profile_name BedrockApplicationInferenceProfile#inference_profile_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the inference profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#description BedrockApplicationInferenceProfile#description}

---

##### `ModelSource`<sup>Optional</sup> <a name="ModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.modelSource"></a>

```csharp
public BedrockApplicationInferenceProfileModelSource ModelSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

Various ways to encode a list of models in a CreateInferenceProfile request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#model_source BedrockApplicationInferenceProfile#model_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileConfig.property.tags"></a>

```csharp
public IResolvable|BedrockApplicationInferenceProfileTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#tags BedrockApplicationInferenceProfile#tags}

---

### BedrockApplicationInferenceProfileModels <a name="BedrockApplicationInferenceProfileModels" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileModels {

};
```


### BedrockApplicationInferenceProfileModelSource <a name="BedrockApplicationInferenceProfileModelSource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileModelSource {
    string CopyFrom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.property.copyFrom">CopyFrom</a></code> | <code>string</code> | Source arns for a custom inference profile to copy its regional load balancing config from. |

---

##### `CopyFrom`<sup>Optional</sup> <a name="CopyFrom" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource.property.copyFrom"></a>

```csharp
public string CopyFrom { get; set; }
```

- *Type:* string

Source arns for a custom inference profile to copy its regional load balancing config from.

This
can either be a foundation model or predefined inference profile ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#copy_from BedrockApplicationInferenceProfile#copy_from}

---

### BedrockApplicationInferenceProfileTags <a name="BedrockApplicationInferenceProfileTags" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.key">Key</a></code> | <code>string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.value">Value</a></code> | <code>string</code> | Tag Value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#key BedrockApplicationInferenceProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrock_application_inference_profile#value BedrockApplicationInferenceProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockApplicationInferenceProfileModelsList <a name="BedrockApplicationInferenceProfileModelsList" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get"></a>

```csharp
private BedrockApplicationInferenceProfileModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockApplicationInferenceProfileModelSourceOutputReference <a name="BedrockApplicationInferenceProfileModelSourceOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileModelSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resetCopyFrom">ResetCopyFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCopyFrom` <a name="ResetCopyFrom" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.resetCopyFrom"></a>

```csharp
private void ResetCopyFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFromInput">CopyFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom">CopyFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CopyFromInput`<sup>Optional</sup> <a name="CopyFromInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFromInput"></a>

```csharp
public string CopyFromInput { get; }
```

- *Type:* string

---

##### `CopyFrom`<sup>Required</sup> <a name="CopyFrom" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.copyFrom"></a>

```csharp
public string CopyFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockApplicationInferenceProfileModelSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelSource">BedrockApplicationInferenceProfileModelSource</a>

---


### BedrockApplicationInferenceProfileModelsOutputReference <a name="BedrockApplicationInferenceProfileModelsOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels">BedrockApplicationInferenceProfileModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModelsOutputReference.property.internalValue"></a>

```csharp
public BedrockApplicationInferenceProfileModels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileModels">BedrockApplicationInferenceProfileModels</a>

---


### BedrockApplicationInferenceProfileTagsList <a name="BedrockApplicationInferenceProfileTagsList" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get"></a>

```csharp
private BedrockApplicationInferenceProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockApplicationInferenceProfileTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>[]

---


### BedrockApplicationInferenceProfileTagsOutputReference <a name="BedrockApplicationInferenceProfileTagsOutputReference" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockApplicationInferenceProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockApplicationInferenceProfileTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockApplicationInferenceProfile.BedrockApplicationInferenceProfileTags">BedrockApplicationInferenceProfileTags</a>

---



