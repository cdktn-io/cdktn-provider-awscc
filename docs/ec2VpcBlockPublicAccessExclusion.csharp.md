# `ec2VpcBlockPublicAccessExclusion` Submodule <a name="`ec2VpcBlockPublicAccessExclusion` Submodule" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcBlockPublicAccessExclusion <a name="Ec2VpcBlockPublicAccessExclusion" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_block_public_access_exclusion awscc_ec2_vpc_block_public_access_exclusion}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcBlockPublicAccessExclusion(Construct Scope, string Id, Ec2VpcBlockPublicAccessExclusionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig">Ec2VpcBlockPublicAccessExclusionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig">Ec2VpcBlockPublicAccessExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2VpcBlockPublicAccessExclusionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]

---

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcBlockPublicAccessExclusion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcBlockPublicAccessExclusion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcBlockPublicAccessExclusion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcBlockPublicAccessExclusion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcBlockPublicAccessExclusion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2VpcBlockPublicAccessExclusion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcBlockPublicAccessExclusion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcBlockPublicAccessExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_block_public_access_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcBlockPublicAccessExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.exclusionId">ExclusionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList">Ec2VpcBlockPublicAccessExclusionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput">InternetGatewayExclusionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode">InternetGatewayExclusionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExclusionId`<sup>Required</sup> <a name="ExclusionId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.exclusionId"></a>

```csharp
public string ExclusionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tags"></a>

```csharp
public Ec2VpcBlockPublicAccessExclusionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList">Ec2VpcBlockPublicAccessExclusionTagsList</a>

---

##### `InternetGatewayExclusionModeInput`<sup>Optional</sup> <a name="InternetGatewayExclusionModeInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput"></a>

```csharp
public string InternetGatewayExclusionModeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tagsInput"></a>

```csharp
public IResolvable|Ec2VpcBlockPublicAccessExclusionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `InternetGatewayExclusionMode`<sup>Required</sup> <a name="InternetGatewayExclusionMode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode"></a>

```csharp
public string InternetGatewayExclusionMode { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcBlockPublicAccessExclusionConfig <a name="Ec2VpcBlockPublicAccessExclusionConfig" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcBlockPublicAccessExclusionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InternetGatewayExclusionMode,
    string SubnetId = null,
    IResolvable|Ec2VpcBlockPublicAccessExclusionTags[] Tags = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode">InternetGatewayExclusionMode</a></code> | <code>string</code> | The desired Block Public Access Exclusion Mode for a specific VPC/Subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet. Required only if you don't specify VpcId. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.vpcId">VpcId</a></code> | <code>string</code> | The ID of the vpc. Required only if you don't specify SubnetId. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InternetGatewayExclusionMode`<sup>Required</sup> <a name="InternetGatewayExclusionMode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode"></a>

```csharp
public string InternetGatewayExclusionMode { get; set; }
```

- *Type:* string

The desired Block Public Access Exclusion Mode for a specific VPC/Subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_block_public_access_exclusion#internet_gateway_exclusion_mode Ec2VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet. Required only if you don't specify VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_block_public_access_exclusion#subnet_id Ec2VpcBlockPublicAccessExclusion#subnet_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.tags"></a>

```csharp
public IResolvable|Ec2VpcBlockPublicAccessExclusionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_block_public_access_exclusion#tags Ec2VpcBlockPublicAccessExclusion#tags}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The ID of the vpc. Required only if you don't specify SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_block_public_access_exclusion#vpc_id Ec2VpcBlockPublicAccessExclusion#vpc_id}

---

### Ec2VpcBlockPublicAccessExclusionTags <a name="Ec2VpcBlockPublicAccessExclusionTags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcBlockPublicAccessExclusionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_block_public_access_exclusion#key Ec2VpcBlockPublicAccessExclusion#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_block_public_access_exclusion#value Ec2VpcBlockPublicAccessExclusion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcBlockPublicAccessExclusionTagsList <a name="Ec2VpcBlockPublicAccessExclusionTagsList" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcBlockPublicAccessExclusionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get"></a>

```csharp
private Ec2VpcBlockPublicAccessExclusionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpcBlockPublicAccessExclusionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]

---


### Ec2VpcBlockPublicAccessExclusionTagsOutputReference <a name="Ec2VpcBlockPublicAccessExclusionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcBlockPublicAccessExclusionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VpcBlockPublicAccessExclusionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>

---



