# `ec2SecurityGroupIngress` Submodule <a name="`ec2SecurityGroupIngress` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupIngress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupIngress <a name="Ec2SecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress awscc_ec2_security_group_ingress}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupIngress(Construct Scope, string Id, Ec2SecurityGroupIngressConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig">Ec2SecurityGroupIngressConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig">Ec2SecurityGroupIngressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp">ResetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId">ResetSourcePrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId">ResetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName">ResetSourceSecurityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId">ResetSourceSecurityGroupOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCidrIp` <a name="ResetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp"></a>

```csharp
private void ResetCidrIp()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6"></a>

```csharp
private void ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetSourcePrefixListId` <a name="ResetSourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId"></a>

```csharp
private void ResetSourcePrefixListId()
```

##### `ResetSourceSecurityGroupId` <a name="ResetSourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId"></a>

```csharp
private void ResetSourceSecurityGroupId()
```

##### `ResetSourceSecurityGroupName` <a name="ResetSourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName"></a>

```csharp
private void ResetSourceSecurityGroupName()
```

##### `ResetSourceSecurityGroupOwnerId` <a name="ResetSourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId"></a>

```csharp
private void ResetSourceSecurityGroupOwnerId()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort"></a>

```csharp
private void ResetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SecurityGroupIngress.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SecurityGroupIngress.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SecurityGroupIngress.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SecurityGroupIngress.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2SecurityGroupIngress to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2SecurityGroupIngress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupIngress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId">SecurityGroupIngressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput">CidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput">SourcePrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput">SourceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput">SourceSecurityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput">SourceSecurityGroupOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp">CidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId">SourcePrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName">SourceSecurityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId">SourceSecurityGroupOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityGroupIngressId`<sup>Required</sup> <a name="SecurityGroupIngressId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId"></a>

```csharp
public string SecurityGroupIngressId { get; }
```

- *Type:* string

---

##### `CidrIpInput`<sup>Optional</sup> <a name="CidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput"></a>

```csharp
public string CidrIpInput { get; }
```

- *Type:* string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input"></a>

```csharp
public string CidrIpv6Input { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `SourcePrefixListIdInput`<sup>Optional</sup> <a name="SourcePrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput"></a>

```csharp
public string SourcePrefixListIdInput { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupIdInput`<sup>Optional</sup> <a name="SourceSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput"></a>

```csharp
public string SourceSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupNameInput`<sup>Optional</sup> <a name="SourceSecurityGroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput"></a>

```csharp
public string SourceSecurityGroupNameInput { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupOwnerIdInput`<sup>Optional</sup> <a name="SourceSecurityGroupOwnerIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput"></a>

```csharp
public string SourceSecurityGroupOwnerIdInput { get; }
```

- *Type:* string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp"></a>

```csharp
public string CidrIp { get; }
```

- *Type:* string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `SourcePrefixListId`<sup>Required</sup> <a name="SourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId"></a>

```csharp
public string SourcePrefixListId { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupId`<sup>Required</sup> <a name="SourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId"></a>

```csharp
public string SourceSecurityGroupId { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupName`<sup>Required</sup> <a name="SourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName"></a>

```csharp
public string SourceSecurityGroupName { get; }
```

- *Type:* string

---

##### `SourceSecurityGroupOwnerId`<sup>Required</sup> <a name="SourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId"></a>

```csharp
public string SourceSecurityGroupOwnerId { get; }
```

- *Type:* string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupIngressConfig <a name="Ec2SecurityGroupIngressConfig" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SecurityGroupIngressConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IpProtocol,
    string CidrIp = null,
    string CidrIpv6 = null,
    string Description = null,
    double FromPort = null,
    string GroupId = null,
    string GroupName = null,
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
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers). |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp">CidrIp</a></code> | <code>string</code> | The IPv4 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6">CidrIpv6</a></code> | <code>string</code> | [VPC only] The IPv6 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description">Description</a></code> | <code>string</code> | Updates the description of an ingress (inbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort">FromPort</a></code> | <code>double</code> | The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId">GroupId</a></code> | <code>string</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName">GroupName</a></code> | <code>string</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId">SourcePrefixListId</a></code> | <code>string</code> | [EC2-VPC only] The ID of a prefix list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>string</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName">SourceSecurityGroupName</a></code> | <code>string</code> | [EC2-Classic, default VPC] The name of the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId">SourceSecurityGroupOwnerId</a></code> | <code>string</code> | [nondefault VPC] The AWS account ID that owns the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort">ToPort</a></code> | <code>double</code> | The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).

[VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#ip_protocol Ec2SecurityGroupIngress#ip_protocol}

---

##### `CidrIp`<sup>Optional</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp"></a>

```csharp
public string CidrIp { get; set; }
```

- *Type:* string

The IPv4 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#cidr_ip Ec2SecurityGroupIngress#cidr_ip}

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6"></a>

```csharp
public string CidrIpv6 { get; set; }
```

- *Type:* string

[VPC only] The IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#cidr_ipv_6 Ec2SecurityGroupIngress#cidr_ipv_6}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Updates the description of an ingress (inbound) security group rule.

You can replace an existing description, or add a description to a rule that did not have one previously

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#description Ec2SecurityGroupIngress#description}

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.

A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#from_port Ec2SecurityGroupIngress#from_port}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#group_id Ec2SecurityGroupIngress#group_id}

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#group_name Ec2SecurityGroupIngress#group_name}

---

##### `SourcePrefixListId`<sup>Optional</sup> <a name="SourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId"></a>

```csharp
public string SourcePrefixListId { get; set; }
```

- *Type:* string

[EC2-VPC only] The ID of a prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_prefix_list_id Ec2SecurityGroupIngress#source_prefix_list_id}

---

##### `SourceSecurityGroupId`<sup>Optional</sup> <a name="SourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId"></a>

```csharp
public string SourceSecurityGroupId { get; set; }
```

- *Type:* string

The ID of the security group.

You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_id Ec2SecurityGroupIngress#source_security_group_id}

---

##### `SourceSecurityGroupName`<sup>Optional</sup> <a name="SourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName"></a>

```csharp
public string SourceSecurityGroupName { get; set; }
```

- *Type:* string

[EC2-Classic, default VPC] The name of the source security group.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_name Ec2SecurityGroupIngress#source_security_group_name}

---

##### `SourceSecurityGroupOwnerId`<sup>Optional</sup> <a name="SourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId"></a>

```csharp
public string SourceSecurityGroupOwnerId { get; set; }
```

- *Type:* string

[nondefault VPC] The AWS account ID that owns the source security group.

You can't specify this property with an IP address range.

If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#source_security_group_owner_id Ec2SecurityGroupIngress#source_security_group_owner_id}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.

A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_security_group_ingress#to_port Ec2SecurityGroupIngress#to_port}

---



