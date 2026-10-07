# `comprehendEntityRecognizer` Submodule <a name="`comprehendEntityRecognizer` Submodule" id="@cdktn/provider-awscc.comprehendEntityRecognizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendEntityRecognizer <a name="ComprehendEntityRecognizer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer awscc_comprehend_entity_recognizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizer(Construct Scope, string Id, ComprehendEntityRecognizerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig">ComprehendEntityRecognizerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig">ComprehendEntityRecognizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelKmsKeyId">ResetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelPolicy">ResetModelPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionName">ResetVersionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig"></a>

```csharp
private void PutInputDataConfig(ComprehendEntityRecognizerInputDataConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags"></a>

```csharp
private void PutTags(IResolvable|ComprehendEntityRecognizerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>[]

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig"></a>

```csharp
private void PutVpcConfig(ComprehendEntityRecognizerVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---

##### `ResetModelKmsKeyId` <a name="ResetModelKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelKmsKeyId"></a>

```csharp
private void ResetModelKmsKeyId()
```

##### `ResetModelPolicy` <a name="ResetModelPolicy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetModelPolicy"></a>

```csharp
private void ResetModelPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVersionName` <a name="ResetVersionName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVersionName"></a>

```csharp
private void ResetVersionName()
```

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVolumeKmsKeyId"></a>

```csharp
private void ResetVolumeKmsKeyId()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendEntityRecognizer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendEntityRecognizer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendEntityRecognizer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendEntityRecognizer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComprehendEntityRecognizer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComprehendEntityRecognizer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComprehendEntityRecognizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendEntityRecognizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference">ComprehendEntityRecognizerInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList">ComprehendEntityRecognizerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference">ComprehendEntityRecognizerVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyIdInput">ModelKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicyInput">ModelPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerNameInput">RecognizerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicy">ModelPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerName">RecognizerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfig"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigOutputReference InputDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference">ComprehendEntityRecognizerInputDataConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tags"></a>

```csharp
public ComprehendEntityRecognizerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList">ComprehendEntityRecognizerTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfig"></a>

```csharp
public ComprehendEntityRecognizerVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference">ComprehendEntityRecognizerVpcConfigOutputReference</a>

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArnInput"></a>

```csharp
public string DataAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.inputDataConfigInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfig InputDataConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `ModelKmsKeyIdInput`<sup>Optional</sup> <a name="ModelKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyIdInput"></a>

```csharp
public string ModelKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ModelPolicyInput`<sup>Optional</sup> <a name="ModelPolicyInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicyInput"></a>

```csharp
public string ModelPolicyInput { get; }
```

- *Type:* string

---

##### `RecognizerNameInput`<sup>Optional</sup> <a name="RecognizerNameInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerNameInput"></a>

```csharp
public string RecognizerNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tagsInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>[]

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyIdInput"></a>

```csharp
public string VolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.vpcConfigInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `ModelKmsKeyId`<sup>Required</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelKmsKeyId"></a>

```csharp
public string ModelKmsKeyId { get; }
```

- *Type:* string

---

##### `ModelPolicy`<sup>Required</sup> <a name="ModelPolicy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.modelPolicy"></a>

```csharp
public string ModelPolicy { get; }
```

- *Type:* string

---

##### `RecognizerName`<sup>Required</sup> <a name="RecognizerName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.recognizerName"></a>

```csharp
public string RecognizerName { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendEntityRecognizerConfig <a name="ComprehendEntityRecognizerConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataAccessRoleArn,
    ComprehendEntityRecognizerInputDataConfig InputDataConfig,
    string LanguageCode,
    string RecognizerName,
    string ModelKmsKeyId = null,
    string ModelPolicy = null,
    IResolvable|ComprehendEntityRecognizerTags[] Tags = null,
    string VersionName = null,
    string VolumeKmsKeyId = null,
    ComprehendEntityRecognizerVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | Specifies the format and location of the input data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | The language of the input documents. All documents must be in the same language. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.recognizerName">RecognizerName</a></code> | <code>string</code> | The name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>string</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelPolicy">ModelPolicy</a></code> | <code>string</code> | The JSON resource-based policy to attach to your custom entity recognizer model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>[]</code> | Tags to associate with the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionName">VersionName</a></code> | <code>string</code> | The version name given to the entity recognizer. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.inputDataConfig"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfig InputDataConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

Specifies the format and location of the input data.

The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

The language of the input documents. All documents must be in the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}

---

##### `RecognizerName`<sup>Required</sup> <a name="RecognizerName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.recognizerName"></a>

```csharp
public string RecognizerName { get; set; }
```

- *Type:* string

The name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#recognizer_name ComprehendEntityRecognizer#recognizer_name}

---

##### `ModelKmsKeyId`<sup>Optional</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelKmsKeyId"></a>

```csharp
public string ModelKmsKeyId { get; set; }
```

- *Type:* string

ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}

---

##### `ModelPolicy`<sup>Optional</sup> <a name="ModelPolicy" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.modelPolicy"></a>

```csharp
public string ModelPolicy { get; set; }
```

- *Type:* string

The JSON resource-based policy to attach to your custom entity recognizer model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#model_policy ComprehendEntityRecognizer#model_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.tags"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>[]

Tags to associate with the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

The version name given to the entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; set; }
```

- *Type:* string

ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerConfig.property.vpcConfig"></a>

```csharp
public ComprehendEntityRecognizerVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}

---

### ComprehendEntityRecognizerInputDataConfig <a name="ComprehendEntityRecognizerInputDataConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfig {
    IResolvable|ComprehendEntityRecognizerInputDataConfigEntityTypes[] EntityTypes,
    ComprehendEntityRecognizerInputDataConfigAnnotations Annotations = null,
    IResolvable|ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] AugmentedManifests = null,
    string DataFormat = null,
    ComprehendEntityRecognizerInputDataConfigDocuments Documents = null,
    ComprehendEntityRecognizerInputDataConfigEntityListStruct EntityList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityTypes">EntityTypes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>[]</code> | The entity types in the labeled training data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.annotations">Annotations</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | The S3 location of the CSV file that annotates your training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests">AugmentedManifests</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>[]</code> | A list of augmented manifest files that provide training data for a custom model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.dataFormat">DataFormat</a></code> | <code>string</code> | The format of your training data. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.documents">Documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | The S3 location of the folder that contains the training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityList">EntityList</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | The S3 location of the CSV file that has the entity list. |

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityTypes"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityTypes[] EntityTypes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>[]

The entity types in the labeled training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#entity_types ComprehendEntityRecognizer#entity_types}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.annotations"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigAnnotations Annotations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

The S3 location of the CSV file that annotates your training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#annotations ComprehendEntityRecognizer#annotations}

---

##### `AugmentedManifests`<sup>Optional</sup> <a name="AugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.augmentedManifests"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] AugmentedManifests { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>[]

A list of augmented manifest files that provide training data for a custom model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#augmented_manifests ComprehendEntityRecognizer#augmented_manifests}

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.dataFormat"></a>

```csharp
public string DataFormat { get; set; }
```

- *Type:* string

The format of your training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}

---

##### `Documents`<sup>Optional</sup> <a name="Documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.documents"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigDocuments Documents { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

The S3 location of the folder that contains the training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#documents ComprehendEntityRecognizer#documents}

---

##### `EntityList`<sup>Optional</sup> <a name="EntityList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig.property.entityList"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigEntityListStruct EntityList { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

The S3 location of the CSV file that has the entity list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#entity_list ComprehendEntityRecognizer#entity_list}

---

### ComprehendEntityRecognizerInputDataConfigAnnotations <a name="ComprehendEntityRecognizerInputDataConfigAnnotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigAnnotations {
    string S3Uri = null,
    string TestS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.s3Uri">S3Uri</a></code> | <code>string</code> | Specifies the Amazon S3 location where the annotations are located. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.testS3Uri">TestS3Uri</a></code> | <code>string</code> | Specifies the Amazon S3 location where the test annotations are located. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Specifies the Amazon S3 location where the annotations are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `TestS3Uri`<sup>Optional</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations.property.testS3Uri"></a>

```csharp
public string TestS3Uri { get; set; }
```

- *Type:* string

Specifies the Amazon S3 location where the test annotations are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigAugmentedManifests <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigAugmentedManifests {
    string AnnotationDataS3Uri = null,
    string[] AttributeNames = null,
    string DocumentType = null,
    string S3Uri = null,
    string SourceDocumentsS3Uri = null,
    string Split = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.annotationDataS3Uri">AnnotationDataS3Uri</a></code> | <code>string</code> | The S3 prefix to the annotation files that are referred in the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.attributeNames">AttributeNames</a></code> | <code>string[]</code> | The JSON attribute that contains the annotations for your training documents. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.documentType">DocumentType</a></code> | <code>string</code> | The type of augmented manifest. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.s3Uri">S3Uri</a></code> | <code>string</code> | The Amazon S3 location of the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri">SourceDocumentsS3Uri</a></code> | <code>string</code> | The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.split">Split</a></code> | <code>string</code> | The purpose of the data you've provided in the augmented manifest. |

---

##### `AnnotationDataS3Uri`<sup>Optional</sup> <a name="AnnotationDataS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.annotationDataS3Uri"></a>

```csharp
public string AnnotationDataS3Uri { get; set; }
```

- *Type:* string

The S3 prefix to the annotation files that are referred in the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#annotation_data_s3_uri ComprehendEntityRecognizer#annotation_data_s3_uri}

---

##### `AttributeNames`<sup>Optional</sup> <a name="AttributeNames" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.attributeNames"></a>

```csharp
public string[] AttributeNames { get; set; }
```

- *Type:* string[]

The JSON attribute that contains the annotations for your training documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#attribute_names ComprehendEntityRecognizer#attribute_names}

---

##### `DocumentType`<sup>Optional</sup> <a name="DocumentType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.documentType"></a>

```csharp
public string DocumentType { get; set; }
```

- *Type:* string

The type of augmented manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#document_type ComprehendEntityRecognizer#document_type}

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

The Amazon S3 location of the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `SourceDocumentsS3Uri`<sup>Optional</sup> <a name="SourceDocumentsS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri"></a>

```csharp
public string SourceDocumentsS3Uri { get; set; }
```

- *Type:* string

The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#source_documents_s3_uri ComprehendEntityRecognizer#source_documents_s3_uri}

---

##### `Split`<sup>Optional</sup> <a name="Split" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests.property.split"></a>

```csharp
public string Split { get; set; }
```

- *Type:* string

The purpose of the data you've provided in the augmented manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#split ComprehendEntityRecognizer#split}

---

### ComprehendEntityRecognizerInputDataConfigDocuments <a name="ComprehendEntityRecognizerInputDataConfigDocuments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigDocuments {
    string InputFormat = null,
    string S3Uri = null,
    string TestS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.inputFormat">InputFormat</a></code> | <code>string</code> | Specifies how the text in an input file should be processed. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.s3Uri">S3Uri</a></code> | <code>string</code> | Specifies the Amazon S3 location where the training documents are located. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.testS3Uri">TestS3Uri</a></code> | <code>string</code> | Specifies the Amazon S3 location where the test documents are located. |

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.inputFormat"></a>

```csharp
public string InputFormat { get; set; }
```

- *Type:* string

Specifies how the text in an input file should be processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Specifies the Amazon S3 location where the training documents are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

##### `TestS3Uri`<sup>Optional</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments.property.testS3Uri"></a>

```csharp
public string TestS3Uri { get; set; }
```

- *Type:* string

Specifies the Amazon S3 location where the test documents are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigEntityListStruct <a name="ComprehendEntityRecognizerInputDataConfigEntityListStruct" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigEntityListStruct {
    string S3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.property.s3Uri">S3Uri</a></code> | <code>string</code> | Specifies the Amazon S3 location where the entity list is located. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Specifies the Amazon S3 location where the entity list is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}

---

### ComprehendEntityRecognizerInputDataConfigEntityTypes <a name="ComprehendEntityRecognizerInputDataConfigEntityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigEntityTypes {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.property.type">Type</a></code> | <code>string</code> | An entity type within a labeled training dataset. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

An entity type within a labeled training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#type ComprehendEntityRecognizer#type}

---

### ComprehendEntityRecognizerTags <a name="ComprehendEntityRecognizerTags" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.key">Key</a></code> | <code>string</code> | The key of the key-value pair that forms a tag. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.value">Value</a></code> | <code>string</code> | The value of the key-value pair that forms a tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the key-value pair that forms a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#key ComprehendEntityRecognizer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the key-value pair that forms a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#value ComprehendEntityRecognizer#value}

---

### ComprehendEntityRecognizerVpcConfig <a name="ComprehendEntityRecognizerVpcConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerVpcConfig {
    string[] SecurityGroupIds = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The ID number for a security group on an instance of your private VPC. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | The ID for each subnet being used in your private VPC. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The ID number for a security group on an instance of your private VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The ID for each subnet being used in your private VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetTestS3Uri">ResetTestS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```

##### `ResetTestS3Uri` <a name="ResetTestS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.resetTestS3Uri"></a>

```csharp
private void ResetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3UriInput">TestS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri">TestS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `TestS3UriInput`<sup>Optional</sup> <a name="TestS3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3UriInput"></a>

```csharp
public string TestS3UriInput { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `TestS3Uri`<sup>Required</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.testS3Uri"></a>

```csharp
public string TestS3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigAnnotations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---


### ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get"></a>

```csharp
private ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>[]

---


### ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri">ResetAnnotationDataS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames">ResetAttributeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetDocumentType">ResetDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri">ResetSourceDocumentsS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSplit">ResetSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotationDataS3Uri` <a name="ResetAnnotationDataS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri"></a>

```csharp
private void ResetAnnotationDataS3Uri()
```

##### `ResetAttributeNames` <a name="ResetAttributeNames" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames"></a>

```csharp
private void ResetAttributeNames()
```

##### `ResetDocumentType` <a name="ResetDocumentType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetDocumentType"></a>

```csharp
private void ResetDocumentType()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```

##### `ResetSourceDocumentsS3Uri` <a name="ResetSourceDocumentsS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri"></a>

```csharp
private void ResetSourceDocumentsS3Uri()
```

##### `ResetSplit` <a name="ResetSplit" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```csharp
private void ResetSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput">AnnotationDataS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">AttributeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput">DocumentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput">SourceDocumentsS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.splitInput">SplitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">AnnotationDataS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">AttributeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType">DocumentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">SourceDocumentsS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split">Split</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnnotationDataS3UriInput`<sup>Optional</sup> <a name="AnnotationDataS3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput"></a>

```csharp
public string AnnotationDataS3UriInput { get; }
```

- *Type:* string

---

##### `AttributeNamesInput`<sup>Optional</sup> <a name="AttributeNamesInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```csharp
public string[] AttributeNamesInput { get; }
```

- *Type:* string[]

---

##### `DocumentTypeInput`<sup>Optional</sup> <a name="DocumentTypeInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput"></a>

```csharp
public string DocumentTypeInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `SourceDocumentsS3UriInput`<sup>Optional</sup> <a name="SourceDocumentsS3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput"></a>

```csharp
public string SourceDocumentsS3UriInput { get; }
```

- *Type:* string

---

##### `SplitInput`<sup>Optional</sup> <a name="SplitInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```csharp
public string SplitInput { get; }
```

- *Type:* string

---

##### `AnnotationDataS3Uri`<sup>Required</sup> <a name="AnnotationDataS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```csharp
public string AnnotationDataS3Uri { get; }
```

- *Type:* string

---

##### `AttributeNames`<sup>Required</sup> <a name="AttributeNames" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```csharp
public string[] AttributeNames { get; }
```

- *Type:* string[]

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```csharp
public string DocumentType { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `SourceDocumentsS3Uri`<sup>Required</sup> <a name="SourceDocumentsS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```csharp
public string SourceDocumentsS3Uri { get; }
```

- *Type:* string

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```csharp
public string Split { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigAugmentedManifests InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>

---


### ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference <a name="ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetTestS3Uri">ResetTestS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetInputFormat"></a>

```csharp
private void ResetInputFormat()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```

##### `ResetTestS3Uri` <a name="ResetTestS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.resetTestS3Uri"></a>

```csharp
private void ResetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3UriInput">TestS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat">InputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri">TestS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormatInput"></a>

```csharp
public string InputFormatInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `TestS3UriInput`<sup>Optional</sup> <a name="TestS3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3UriInput"></a>

```csharp
public string TestS3UriInput { get; }
```

- *Type:* string

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.inputFormat"></a>

```csharp
public string InputFormat { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `TestS3Uri`<sup>Required</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```csharp
public string TestS3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigDocuments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---


### ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference <a name="ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---


### ComprehendEntityRecognizerInputDataConfigEntityTypesList <a name="ComprehendEntityRecognizerInputDataConfigEntityTypesList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigEntityTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get"></a>

```csharp
private ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityTypes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>[]

---


### ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference <a name="ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityTypes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>

---


### ComprehendEntityRecognizerInputDataConfigOutputReference <a name="ComprehendEntityRecognizerInputDataConfigOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerInputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations">PutAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests">PutAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments">PutDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList">PutEntityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes">PutEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAugmentedManifests">ResetAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDocuments">ResetDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetEntityList">ResetEntityList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnnotations` <a name="PutAnnotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations"></a>

```csharp
private void PutAnnotations(ComprehendEntityRecognizerInputDataConfigAnnotations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAnnotations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---

##### `PutAugmentedManifests` <a name="PutAugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests"></a>

```csharp
private void PutAugmentedManifests(IResolvable|ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>[]

---

##### `PutDocuments` <a name="PutDocuments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments"></a>

```csharp
private void PutDocuments(ComprehendEntityRecognizerInputDataConfigDocuments Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putDocuments.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---

##### `PutEntityList` <a name="PutEntityList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList"></a>

```csharp
private void PutEntityList(ComprehendEntityRecognizerInputDataConfigEntityListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---

##### `PutEntityTypes` <a name="PutEntityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes"></a>

```csharp
private void PutEntityTypes(IResolvable|ComprehendEntityRecognizerInputDataConfigEntityTypes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>[]

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAugmentedManifests` <a name="ResetAugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetAugmentedManifests"></a>

```csharp
private void ResetAugmentedManifests()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDataFormat"></a>

```csharp
private void ResetDataFormat()
```

##### `ResetDocuments` <a name="ResetDocuments" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetDocuments"></a>

```csharp
private void ResetDocuments()
```

##### `ResetEntityList` <a name="ResetEntityList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.resetEntityList"></a>

```csharp
private void ResetEntityList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations">Annotations</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests">AugmentedManifests</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documents">Documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList">EntityList</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList">ComprehendEntityRecognizerInputDataConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifestsInput">AugmentedManifestsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documentsInput">DocumentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityListInput">EntityListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypesInput">EntityTypesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat">DataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotations"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference Annotations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference">ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference</a>

---

##### `AugmentedManifests`<sup>Required</sup> <a name="AugmentedManifests" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifests"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList AugmentedManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList">ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList</a>

---

##### `Documents`<sup>Required</sup> <a name="Documents" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documents"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference Documents { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference">ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference</a>

---

##### `EntityList`<sup>Required</sup> <a name="EntityList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityList"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference EntityList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference">ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference</a>

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypes"></a>

```csharp
public ComprehendEntityRecognizerInputDataConfigEntityTypesList EntityTypes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypesList">ComprehendEntityRecognizerInputDataConfigEntityTypesList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.annotationsInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigAnnotations AnnotationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAnnotations">ComprehendEntityRecognizerInputDataConfigAnnotations</a>

---

##### `AugmentedManifestsInput`<sup>Optional</sup> <a name="AugmentedManifestsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] AugmentedManifestsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigAugmentedManifests">ComprehendEntityRecognizerInputDataConfigAugmentedManifests</a>[]

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormatInput"></a>

```csharp
public string DataFormatInput { get; }
```

- *Type:* string

---

##### `DocumentsInput`<sup>Optional</sup> <a name="DocumentsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.documentsInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigDocuments DocumentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigDocuments">ComprehendEntityRecognizerInputDataConfigDocuments</a>

---

##### `EntityListInput`<sup>Optional</sup> <a name="EntityListInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityListInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityListStruct EntityListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityListStruct">ComprehendEntityRecognizerInputDataConfigEntityListStruct</a>

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.entityTypesInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfigEntityTypes[] EntityTypesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigEntityTypes">ComprehendEntityRecognizerInputDataConfigEntityTypes</a>[]

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.dataFormat"></a>

```csharp
public string DataFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerInputDataConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerInputDataConfig">ComprehendEntityRecognizerInputDataConfig</a>

---


### ComprehendEntityRecognizerTagsList <a name="ComprehendEntityRecognizerTagsList" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get"></a>

```csharp
private ComprehendEntityRecognizerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsList.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>[]

---


### ComprehendEntityRecognizerTagsOutputReference <a name="ComprehendEntityRecognizerTagsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerTags">ComprehendEntityRecognizerTags</a>

---


### ComprehendEntityRecognizerVpcConfigOutputReference <a name="ComprehendEntityRecognizerVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizer.ComprehendEntityRecognizerVpcConfig">ComprehendEntityRecognizerVpcConfig</a>

---



