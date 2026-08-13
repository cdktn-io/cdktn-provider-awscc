# `ec2SecurityGroup` Submodule <a name="`ec2SecurityGroup` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroup <a name="Ec2SecurityGroup" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group awscc_ec2_security_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroup(Construct Scope, string Id, Ec2SecurityGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig">Ec2SecurityGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig">Ec2SecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress">PutSecurityGroupEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress">PutSecurityGroupIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupEgress">ResetSecurityGroupEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupIngress">ResetSecurityGroupIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSecurityGroupEgress` <a name="PutSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress"></a>

```csharp
private void PutSecurityGroupEgress(IResolvable|Ec2SecurityGroupSecurityGroupEgress[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupEgress.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]

---

##### `PutSecurityGroupIngress` <a name="PutSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress"></a>

```csharp
private void PutSecurityGroupIngress(IResolvable|Ec2SecurityGroupSecurityGroupIngress[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putSecurityGroupIngress.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2SecurityGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]

---

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetSecurityGroupEgress` <a name="ResetSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupEgress"></a>

```csharp
private void ResetSecurityGroupEgress()
```

##### `ResetSecurityGroupIngress` <a name="ResetSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetSecurityGroupIngress"></a>

```csharp
private void ResetSecurityGroupIngress()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SecurityGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SecurityGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SecurityGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SecurityGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2SecurityGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2SecurityGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2SecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgress">SecurityGroupEgress</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList">Ec2SecurityGroupSecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngress">SecurityGroupIngress</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList">Ec2SecurityGroupSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList">Ec2SecurityGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescriptionInput">GroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgressInput">SecurityGroupEgressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngressInput">SecurityGroupIngressInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescription">GroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityGroupEgress`<sup>Required</sup> <a name="SecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgress"></a>

```csharp
public Ec2SecurityGroupSecurityGroupEgressList SecurityGroupEgress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList">Ec2SecurityGroupSecurityGroupEgressList</a>

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `SecurityGroupIngress`<sup>Required</sup> <a name="SecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngress"></a>

```csharp
public Ec2SecurityGroupSecurityGroupIngressList SecurityGroupIngress { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList">Ec2SecurityGroupSecurityGroupIngressList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tags"></a>

```csharp
public Ec2SecurityGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList">Ec2SecurityGroupTagsList</a>

---

##### `GroupDescriptionInput`<sup>Optional</sup> <a name="GroupDescriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescriptionInput"></a>

```csharp
public string GroupDescriptionInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `SecurityGroupEgressInput`<sup>Optional</sup> <a name="SecurityGroupEgressInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupEgressInput"></a>

```csharp
public IResolvable|Ec2SecurityGroupSecurityGroupEgress[] SecurityGroupEgressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]

---

##### `SecurityGroupIngressInput`<sup>Optional</sup> <a name="SecurityGroupIngressInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.securityGroupIngressInput"></a>

```csharp
public IResolvable|Ec2SecurityGroupSecurityGroupIngress[] SecurityGroupIngressInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tagsInput"></a>

```csharp
public IResolvable|Ec2SecurityGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupDescription"></a>

```csharp
public string GroupDescription { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupConfig <a name="Ec2SecurityGroupConfig" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GroupDescription,
    string GroupName = null,
    IResolvable|Ec2SecurityGroupSecurityGroupEgress[] SecurityGroupEgress = null,
    IResolvable|Ec2SecurityGroupSecurityGroupIngress[] SecurityGroupIngress = null,
    IResolvable|Ec2SecurityGroupTags[] Tags = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupDescription">GroupDescription</a></code> | <code>string</code> | A description for the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupName">GroupName</a></code> | <code>string</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupEgress">SecurityGroupEgress</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]</code> | [VPC only] The outbound rules associated with the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupIngress">SecurityGroupIngress</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]</code> | The inbound rules associated with the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]</code> | Any tags assigned to the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.vpcId">VpcId</a></code> | <code>string</code> | The ID of the VPC for the security group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupDescription"></a>

```csharp
public string GroupDescription { get; set; }
```

- *Type:* string

A description for the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#group_description Ec2SecurityGroup#group_description}

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#group_name Ec2SecurityGroup#group_name}

---

##### `SecurityGroupEgress`<sup>Optional</sup> <a name="SecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupEgress"></a>

```csharp
public IResolvable|Ec2SecurityGroupSecurityGroupEgress[] SecurityGroupEgress { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]

[VPC only] The outbound rules associated with the security group.

There is a short interruption during which you cannot connect to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#security_group_egress Ec2SecurityGroup#security_group_egress}

---

##### `SecurityGroupIngress`<sup>Optional</sup> <a name="SecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.securityGroupIngress"></a>

```csharp
public IResolvable|Ec2SecurityGroupSecurityGroupIngress[] SecurityGroupIngress { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]

The inbound rules associated with the security group.

There is a short interruption during which you cannot connect to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#security_group_ingress Ec2SecurityGroup#security_group_ingress}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.tags"></a>

```csharp
public IResolvable|Ec2SecurityGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]

Any tags assigned to the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#tags Ec2SecurityGroup#tags}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The ID of the VPC for the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#vpc_id Ec2SecurityGroup#vpc_id}

---

### Ec2SecurityGroupSecurityGroupEgress <a name="Ec2SecurityGroupSecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupSecurityGroupEgress {
    string CidrIp = null,
    string CidrIpv6 = null,
    string Description = null,
    string DestinationPrefixListId = null,
    string DestinationSecurityGroupId = null,
    double FromPort = null,
    string IpProtocol = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIp">CidrIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#destination_prefix_list_id Ec2SecurityGroup#destination_prefix_list_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationSecurityGroupId">DestinationSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#destination_security_group_id Ec2SecurityGroup#destination_security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}. |

---

##### `CidrIp`<sup>Optional</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIp"></a>

```csharp
public string CidrIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}.

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}.

---

##### `DestinationPrefixListId`<sup>Optional</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationPrefixListId"></a>

```csharp
public string DestinationPrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#destination_prefix_list_id Ec2SecurityGroup#destination_prefix_list_id}.

---

##### `DestinationSecurityGroupId`<sup>Optional</sup> <a name="DestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.destinationSecurityGroupId"></a>

```csharp
public string DestinationSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#destination_security_group_id Ec2SecurityGroup#destination_security_group_id}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}.

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}.

---

### Ec2SecurityGroupSecurityGroupIngress <a name="Ec2SecurityGroupSecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupSecurityGroupIngress {
    string CidrIp = null,
    string CidrIpv6 = null,
    string Description = null,
    double FromPort = null,
    string IpProtocol = null,
    string SourcePrefixListId = null,
    string SourceSecurityGroupId = null,
    string SourceSecurityGroupName = null,
    string SourceSecurityGroupOwnerId = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIp">CidrIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourcePrefixListId">SourcePrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#source_prefix_list_id Ec2SecurityGroup#source_prefix_list_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#source_security_group_id Ec2SecurityGroup#source_security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupName">SourceSecurityGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#source_security_group_name Ec2SecurityGroup#source_security_group_name}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupOwnerId">SourceSecurityGroupOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#source_security_group_owner_id Ec2SecurityGroup#source_security_group_owner_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}. |

---

##### `CidrIp`<sup>Optional</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIp"></a>

```csharp
public string CidrIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#cidr_ip Ec2SecurityGroup#cidr_ip}.

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#cidr_ipv_6 Ec2SecurityGroup#cidr_ipv_6}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#description Ec2SecurityGroup#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#from_port Ec2SecurityGroup#from_port}.

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#ip_protocol Ec2SecurityGroup#ip_protocol}.

---

##### `SourcePrefixListId`<sup>Optional</sup> <a name="SourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourcePrefixListId"></a>

```csharp
public string SourcePrefixListId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#source_prefix_list_id Ec2SecurityGroup#source_prefix_list_id}.

---

##### `SourceSecurityGroupId`<sup>Optional</sup> <a name="SourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupId"></a>

```csharp
public string SourceSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#source_security_group_id Ec2SecurityGroup#source_security_group_id}.

---

##### `SourceSecurityGroupName`<sup>Optional</sup> <a name="SourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupName"></a>

```csharp
public string SourceSecurityGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#source_security_group_name Ec2SecurityGroup#source_security_group_name}.

---

##### `SourceSecurityGroupOwnerId`<sup>Optional</sup> <a name="SourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.sourceSecurityGroupOwnerId"></a>

```csharp
public string SourceSecurityGroupOwnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#source_security_group_owner_id Ec2SecurityGroup#source_security_group_owner_id}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#to_port Ec2SecurityGroup#to_port}.

---

### Ec2SecurityGroupTags <a name="Ec2SecurityGroupTags" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#key Ec2SecurityGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#value Ec2SecurityGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#key Ec2SecurityGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_security_group#value Ec2SecurityGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SecurityGroupSecurityGroupEgressList <a name="Ec2SecurityGroupSecurityGroupEgressList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupSecurityGroupEgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get"></a>

```csharp
private Ec2SecurityGroupSecurityGroupEgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressList.property.internalValue"></a>

```csharp
public IResolvable|Ec2SecurityGroupSecurityGroupEgress[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>[]

---


### Ec2SecurityGroupSecurityGroupEgressOutputReference <a name="Ec2SecurityGroupSecurityGroupEgressOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupSecurityGroupEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIp">ResetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationPrefixListId">ResetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationSecurityGroupId">ResetDestinationSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrIp` <a name="ResetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIp"></a>

```csharp
private void ResetCidrIp()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetCidrIpv6"></a>

```csharp
private void ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationPrefixListId` <a name="ResetDestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationPrefixListId"></a>

```csharp
private void ResetDestinationPrefixListId()
```

##### `ResetDestinationSecurityGroupId` <a name="ResetDestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetDestinationSecurityGroupId"></a>

```csharp
private void ResetDestinationSecurityGroupId()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetIpProtocol"></a>

```csharp
private void ResetIpProtocol()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpInput">CidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListIdInput">DestinationPrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupIdInput">DestinationSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIp">CidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupId">DestinationSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrIpInput`<sup>Optional</sup> <a name="CidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpInput"></a>

```csharp
public string CidrIpInput { get; }
```

- *Type:* string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6Input"></a>

```csharp
public string CidrIpv6Input { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationPrefixListIdInput`<sup>Optional</sup> <a name="DestinationPrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListIdInput"></a>

```csharp
public string DestinationPrefixListIdInput { get; }
```

- *Type:* string

---

##### `DestinationSecurityGroupIdInput`<sup>Optional</sup> <a name="DestinationSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupIdInput"></a>

```csharp
public string DestinationSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIp"></a>

```csharp
public string CidrIp { get; }
```

- *Type:* string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationPrefixListId`<sup>Required</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationPrefixListId"></a>

```csharp
public string DestinationPrefixListId { get; }
```

- *Type:* string

---

##### `DestinationSecurityGroupId`<sup>Required</sup> <a name="DestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.destinationSecurityGroupId"></a>

```csharp
public string DestinationSecurityGroupId { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2SecurityGroupSecurityGroupEgress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupEgress">Ec2SecurityGroupSecurityGroupEgress</a>

---


### Ec2SecurityGroupSecurityGroupIngressList <a name="Ec2SecurityGroupSecurityGroupIngressList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupSecurityGroupIngressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get"></a>

```csharp
private Ec2SecurityGroupSecurityGroupIngressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressList.property.internalValue"></a>

```csharp
public IResolvable|Ec2SecurityGroupSecurityGroupIngress[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>[]

---


### Ec2SecurityGroupSecurityGroupIngressOutputReference <a name="Ec2SecurityGroupSecurityGroupIngressOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupSecurityGroupIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIp">ResetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourcePrefixListId">ResetSourcePrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupId">ResetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupName">ResetSourceSecurityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupOwnerId">ResetSourceSecurityGroupOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrIp` <a name="ResetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIp"></a>

```csharp
private void ResetCidrIp()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetCidrIpv6"></a>

```csharp
private void ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetIpProtocol"></a>

```csharp
private void ResetIpProtocol()
```

##### `ResetSourcePrefixListId` <a name="ResetSourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourcePrefixListId"></a>

```csharp
private void ResetSourcePrefixListId()
```

##### `ResetSourceSecurityGroupId` <a name="ResetSourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupId"></a>

```csharp
private void ResetSourceSecurityGroupId()
```

##### `ResetSourceSecurityGroupName` <a name="ResetSourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupName"></a>

```csharp
private void ResetSourceSecurityGroupName()
```

##### `ResetSourceSecurityGroupOwnerId` <a name="ResetSourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetSourceSecurityGroupOwnerId"></a>

```csharp
private void ResetSourceSecurityGroupOwnerId()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpInput">CidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListIdInput">SourcePrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupIdInput">SourceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupNameInput">SourceSecurityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerIdInput">SourceSecurityGroupOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIp">CidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListId">SourcePrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupName">SourceSecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerId">SourceSecurityGroupOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrIpInput`<sup>Optional</sup> <a name="CidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpInput"></a>

```csharp
public string CidrIpInput { get; }
```

- *Type:* string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6Input"></a>

```csharp
public string CidrIpv6Input { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `SourcePrefixListIdInput`<sup>Optional</sup> <a name="SourcePrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListIdInput"></a>

```csharp
public string SourcePrefixListIdInput { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupIdInput`<sup>Optional</sup> <a name="SourceSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupIdInput"></a>

```csharp
public string SourceSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupNameInput`<sup>Optional</sup> <a name="SourceSecurityGroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupNameInput"></a>

```csharp
public string SourceSecurityGroupNameInput { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupOwnerIdInput`<sup>Optional</sup> <a name="SourceSecurityGroupOwnerIdInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerIdInput"></a>

```csharp
public string SourceSecurityGroupOwnerIdInput { get; }
```

- *Type:* string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIp"></a>

```csharp
public string CidrIp { get; }
```

- *Type:* string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `SourcePrefixListId`<sup>Required</sup> <a name="SourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourcePrefixListId"></a>

```csharp
public string SourcePrefixListId { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupId`<sup>Required</sup> <a name="SourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupId"></a>

```csharp
public string SourceSecurityGroupId { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupName`<sup>Required</sup> <a name="SourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupName"></a>

```csharp
public string SourceSecurityGroupName { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupOwnerId`<sup>Required</sup> <a name="SourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.sourceSecurityGroupOwnerId"></a>

```csharp
public string SourceSecurityGroupOwnerId { get; }
```

- *Type:* string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngressOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2SecurityGroupSecurityGroupIngress InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupSecurityGroupIngress">Ec2SecurityGroupSecurityGroupIngress</a>

---


### Ec2SecurityGroupTagsList <a name="Ec2SecurityGroupTagsList" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get"></a>

```csharp
private Ec2SecurityGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2SecurityGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>[]

---


### Ec2SecurityGroupTagsOutputReference <a name="Ec2SecurityGroupTagsOutputReference" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2SecurityGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SecurityGroup.Ec2SecurityGroupTags">Ec2SecurityGroupTags</a>

---



