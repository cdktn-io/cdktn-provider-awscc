# `comprehendEntityRecognizerEndpoint` Submodule <a name="`comprehendEntityRecognizerEndpoint` Submodule" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendEntityRecognizerEndpoint <a name="ComprehendEntityRecognizerEndpoint" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint awscc_comprehend_entity_recognizer_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerEndpoint(Construct Scope, string Id, ComprehendEntityRecognizerEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig">ComprehendEntityRecognizerEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig">ComprehendEntityRecognizerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetDataAccessRoleArn">ResetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetFlywheelArn">ResetFlywheelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetModelArn">ResetModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags"></a>

```csharp
private void PutTags(IResolvable|ComprehendEntityRecognizerEndpointTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]

---

##### `ResetDataAccessRoleArn` <a name="ResetDataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetDataAccessRoleArn"></a>

```csharp
private void ResetDataAccessRoleArn()
```

##### `ResetFlywheelArn` <a name="ResetFlywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetFlywheelArn"></a>

```csharp
private void ResetFlywheelArn()
```

##### `ResetModelArn` <a name="ResetModelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetModelArn"></a>

```csharp
private void ResetModelArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendEntityRecognizerEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendEntityRecognizerEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendEntityRecognizerEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendEntityRecognizerEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComprehendEntityRecognizerEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComprehendEntityRecognizerEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComprehendEntityRecognizerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendEntityRecognizerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.currentInferenceUnits">CurrentInferenceUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointStatus">EndpointStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList">ComprehendEntityRecognizerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnitsInput">DesiredInferenceUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArnInput">FlywheelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArnInput">ModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits">DesiredInferenceUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArn">FlywheelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CurrentInferenceUnits`<sup>Required</sup> <a name="CurrentInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.currentInferenceUnits"></a>

```csharp
public double CurrentInferenceUnits { get; }
```

- *Type:* double

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointStatus"></a>

```csharp
public string EndpointStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tags"></a>

```csharp
public ComprehendEntityRecognizerEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList">ComprehendEntityRecognizerEndpointTagsList</a>

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArnInput"></a>

```csharp
public string DataAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `DesiredInferenceUnitsInput`<sup>Optional</sup> <a name="DesiredInferenceUnitsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnitsInput"></a>

```csharp
public double DesiredInferenceUnitsInput { get; }
```

- *Type:* double

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `FlywheelArnInput`<sup>Optional</sup> <a name="FlywheelArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArnInput"></a>

```csharp
public string FlywheelArnInput { get; }
```

- *Type:* string

---

##### `ModelArnInput`<sup>Optional</sup> <a name="ModelArnInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArnInput"></a>

```csharp
public string ModelArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tagsInput"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerEndpointTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; }
```

- *Type:* string

---

##### `DesiredInferenceUnits`<sup>Required</sup> <a name="DesiredInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.desiredInferenceUnits"></a>

```csharp
public double DesiredInferenceUnits { get; }
```

- *Type:* double

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `FlywheelArn`<sup>Required</sup> <a name="FlywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.flywheelArn"></a>

```csharp
public string FlywheelArn { get; }
```

- *Type:* string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendEntityRecognizerEndpointConfig <a name="ComprehendEntityRecognizerEndpointConfig" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double DesiredInferenceUnits,
    string EndpointName,
    string DataAccessRoleArn = null,
    string FlywheelArn = null,
    string ModelArn = null,
    IResolvable|ComprehendEntityRecognizerEndpointTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.desiredInferenceUnits">DesiredInferenceUnits</a></code> | <code>double</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.endpointName">EndpointName</a></code> | <code>string</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId). |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.flywheelArn">FlywheelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.modelArn">ModelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]</code> | Tags associated with the endpoint being created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DesiredInferenceUnits`<sup>Required</sup> <a name="DesiredInferenceUnits" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.desiredInferenceUnits"></a>

```csharp
public double DesiredInferenceUnits { get; set; }
```

- *Type:* double

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#desired_inference_units ComprehendEntityRecognizerEndpoint#desired_inference_units}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#endpoint_name ComprehendEntityRecognizerEndpoint#endpoint_name}

---

##### `DataAccessRoleArn`<sup>Optional</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#data_access_role_arn ComprehendEntityRecognizerEndpoint#data_access_role_arn}

---

##### `FlywheelArn`<sup>Optional</sup> <a name="FlywheelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.flywheelArn"></a>

```csharp
public string FlywheelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#flywheel_arn ComprehendEntityRecognizerEndpoint#flywheel_arn}

---

##### `ModelArn`<sup>Optional</sup> <a name="ModelArn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.modelArn"></a>

```csharp
public string ModelArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#model_arn ComprehendEntityRecognizerEndpoint#model_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointConfig.property.tags"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerEndpointTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#tags ComprehendEntityRecognizerEndpoint#tags}

---

### ComprehendEntityRecognizerEndpointTags <a name="ComprehendEntityRecognizerEndpointTags" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerEndpointTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.key">Key</a></code> | <code>string</code> | The initial part of a key-value pair that forms a tag associated with a given resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.value">Value</a></code> | <code>string</code> | The second part of a key-value pair that forms a tag associated with a given resource. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The initial part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#key ComprehendEntityRecognizerEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The second part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/comprehend_entity_recognizer_endpoint#value ComprehendEntityRecognizerEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendEntityRecognizerEndpointTagsList <a name="ComprehendEntityRecognizerEndpointTagsList" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get"></a>

```csharp
private ComprehendEntityRecognizerEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsList.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerEndpointTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>[]

---


### ComprehendEntityRecognizerEndpointTagsOutputReference <a name="ComprehendEntityRecognizerEndpointTagsOutputReference" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendEntityRecognizerEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendEntityRecognizerEndpointTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendEntityRecognizerEndpoint.ComprehendEntityRecognizerEndpointTags">ComprehendEntityRecognizerEndpointTags</a>

---



