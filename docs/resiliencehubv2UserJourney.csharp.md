# `resiliencehubv2UserJourney` Submodule <a name="`resiliencehubv2UserJourney` Submodule" id="@cdktn/provider-awscc.resiliencehubv2UserJourney"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2UserJourney <a name="Resiliencehubv2UserJourney" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_user_journey awscc_resiliencehubv2_user_journey}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2UserJourney(Construct Scope, string Id, Resiliencehubv2UserJourneyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig">Resiliencehubv2UserJourneyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig">Resiliencehubv2UserJourneyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetPolicyArn">ResetPolicyArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPolicyArn` <a name="ResetPolicyArn" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.resetPolicyArn"></a>

```csharp
private void ResetPolicyArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2UserJourney resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2UserJourney.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2UserJourney.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2UserJourney.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2UserJourney.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Resiliencehubv2UserJourney resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2UserJourney to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2UserJourney that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_user_journey#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2UserJourney to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.userJourneyId">UserJourneyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.policyArnInput">PolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.systemIdentifierInput">SystemIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.systemIdentifier">SystemIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UserJourneyId`<sup>Required</sup> <a name="UserJourneyId" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.userJourneyId"></a>

```csharp
public string UserJourneyId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.policyArnInput"></a>

```csharp
public string PolicyArnInput { get; }
```

- *Type:* string

---

##### `SystemIdentifierInput`<sup>Optional</sup> <a name="SystemIdentifierInput" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.systemIdentifierInput"></a>

```csharp
public string SystemIdentifierInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `SystemIdentifier`<sup>Required</sup> <a name="SystemIdentifier" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.systemIdentifier"></a>

```csharp
public string SystemIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourney.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2UserJourneyConfig <a name="Resiliencehubv2UserJourneyConfig" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2UserJourneyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string SystemIdentifier,
    string Description = null,
    string PolicyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.name">Name</a></code> | <code>string</code> | The name of the user journey. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.systemIdentifier">SystemIdentifier</a></code> | <code>string</code> | The system ARN or system ID that owns this user journey. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.description">Description</a></code> | <code>string</code> | The description of the user journey. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.policyArn">PolicyArn</a></code> | <code>string</code> | The ARN of the resilience policy to associate with this user journey. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the user journey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_user_journey#name Resiliencehubv2UserJourney#name}

---

##### `SystemIdentifier`<sup>Required</sup> <a name="SystemIdentifier" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.systemIdentifier"></a>

```csharp
public string SystemIdentifier { get; set; }
```

- *Type:* string

The system ARN or system ID that owns this user journey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_user_journey#system_identifier Resiliencehubv2UserJourney#system_identifier}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the user journey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_user_journey#description Resiliencehubv2UserJourney#description}

---

##### `PolicyArn`<sup>Optional</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.resiliencehubv2UserJourney.Resiliencehubv2UserJourneyConfig.property.policyArn"></a>

```csharp
public string PolicyArn { get; set; }
```

- *Type:* string

The ARN of the resilience policy to associate with this user journey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_user_journey#policy_arn Resiliencehubv2UserJourney#policy_arn}

---



