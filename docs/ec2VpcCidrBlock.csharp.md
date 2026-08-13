# `ec2VpcCidrBlock` Submodule <a name="`ec2VpcCidrBlock` Submodule" id="@cdktn/provider-awscc.ec2VpcCidrBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcCidrBlock <a name="Ec2VpcCidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcCidrBlock(Construct Scope, string Id, Ec2VpcCidrBlockConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig">Ec2VpcCidrBlockConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig">Ec2VpcCidrBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetAmazonProvidedIpv6CidrBlock">ResetAmazonProvidedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4IpamPoolId">ResetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4NetmaskLength">ResetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlockNetworkBorderGroup">ResetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6IpamPoolId">ResetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6NetmaskLength">ResetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6Pool">ResetIpv6Pool</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAmazonProvidedIpv6CidrBlock` <a name="ResetAmazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetAmazonProvidedIpv6CidrBlock"></a>

```csharp
private void ResetAmazonProvidedIpv6CidrBlock()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetIpv4IpamPoolId` <a name="ResetIpv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4IpamPoolId"></a>

```csharp
private void ResetIpv4IpamPoolId()
```

##### `ResetIpv4NetmaskLength` <a name="ResetIpv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4NetmaskLength"></a>

```csharp
private void ResetIpv4NetmaskLength()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetIpv6CidrBlockNetworkBorderGroup` <a name="ResetIpv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlockNetworkBorderGroup"></a>

```csharp
private void ResetIpv6CidrBlockNetworkBorderGroup()
```

##### `ResetIpv6IpamPoolId` <a name="ResetIpv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6IpamPoolId"></a>

```csharp
private void ResetIpv6IpamPoolId()
```

##### `ResetIpv6NetmaskLength` <a name="ResetIpv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6NetmaskLength"></a>

```csharp
private void ResetIpv6NetmaskLength()
```

##### `ResetIpv6Pool` <a name="ResetIpv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6Pool"></a>

```csharp
private void ResetIpv6Pool()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcCidrBlock resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcCidrBlock.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcCidrBlock.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcCidrBlock.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VpcCidrBlock.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2VpcCidrBlock resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcCidrBlock to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcCidrBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcCidrBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipSource">IpSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6AddressAttribute">Ipv6AddressAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcCidrBlockId">VpcCidrBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlockInput">AmazonProvidedIpv6CidrBlockInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolIdInput">Ipv4IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLengthInput">Ipv4NetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroupInput">Ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolIdInput">Ipv6IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLengthInput">Ipv6NetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6PoolInput">Ipv6PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock">AmazonProvidedIpv6CidrBlock</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup">Ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6Pool">Ipv6Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpSource`<sup>Required</sup> <a name="IpSource" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipSource"></a>

```csharp
public string IpSource { get; }
```

- *Type:* string

---

##### `Ipv6AddressAttribute`<sup>Required</sup> <a name="Ipv6AddressAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6AddressAttribute"></a>

```csharp
public string Ipv6AddressAttribute { get; }
```

- *Type:* string

---

##### `VpcCidrBlockId`<sup>Required</sup> <a name="VpcCidrBlockId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcCidrBlockId"></a>

```csharp
public string VpcCidrBlockId { get; }
```

- *Type:* string

---

##### `AmazonProvidedIpv6CidrBlockInput`<sup>Optional</sup> <a name="AmazonProvidedIpv6CidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlockInput"></a>

```csharp
public bool|IResolvable AmazonProvidedIpv6CidrBlockInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `Ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv4IpamPoolIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolIdInput"></a>

```csharp
public string Ipv4IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `Ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv4NetmaskLengthInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLengthInput"></a>

```csharp
public double Ipv4NetmaskLengthInput { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="Ipv6CidrBlockNetworkBorderGroupInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```csharp
public string Ipv6CidrBlockNetworkBorderGroupInput { get; }
```

- *Type:* string

---

##### `Ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="Ipv6IpamPoolIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolIdInput"></a>

```csharp
public string Ipv6IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `Ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="Ipv6NetmaskLengthInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLengthInput"></a>

```csharp
public double Ipv6NetmaskLengthInput { get; }
```

- *Type:* double

---

##### `Ipv6PoolInput`<sup>Optional</sup> <a name="Ipv6PoolInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6PoolInput"></a>

```csharp
public string Ipv6PoolInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AmazonProvidedIpv6CidrBlock`<sup>Required</sup> <a name="AmazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock"></a>

```csharp
public bool|IResolvable AmazonProvidedIpv6CidrBlock { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `Ipv4IpamPoolId`<sup>Required</sup> <a name="Ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolId"></a>

```csharp
public string Ipv4IpamPoolId { get; }
```

- *Type:* string

---

##### `Ipv4NetmaskLength`<sup>Required</sup> <a name="Ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLength"></a>

```csharp
public double Ipv4NetmaskLength { get; }
```

- *Type:* double

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="Ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup"></a>

```csharp
public string Ipv6CidrBlockNetworkBorderGroup { get; }
```

- *Type:* string

---

##### `Ipv6IpamPoolId`<sup>Required</sup> <a name="Ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolId"></a>

```csharp
public string Ipv6IpamPoolId { get; }
```

- *Type:* string

---

##### `Ipv6NetmaskLength`<sup>Required</sup> <a name="Ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLength"></a>

```csharp
public double Ipv6NetmaskLength { get; }
```

- *Type:* double

---

##### `Ipv6Pool`<sup>Required</sup> <a name="Ipv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6Pool"></a>

```csharp
public string Ipv6Pool { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcCidrBlockConfig <a name="Ec2VpcCidrBlockConfig" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VpcCidrBlockConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string VpcId,
    bool|IResolvable AmazonProvidedIpv6CidrBlock = null,
    string CidrBlock = null,
    string Ipv4IpamPoolId = null,
    double Ipv4NetmaskLength = null,
    string Ipv6CidrBlock = null,
    string Ipv6CidrBlockNetworkBorderGroup = null,
    string Ipv6IpamPoolId = null,
    double Ipv6NetmaskLength = null,
    string Ipv6Pool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.vpcId">VpcId</a></code> | <code>string</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.amazonProvidedIpv6CidrBlock">AmazonProvidedIpv6CidrBlock</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | An IPv4 CIDR block to associate with the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4IpamPoolId">Ipv4IpamPoolId</a></code> | <code>string</code> | The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4NetmaskLength">Ipv4NetmaskLength</a></code> | <code>double</code> | The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | An IPv6 CIDR block from the IPv6 address pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlockNetworkBorderGroup">Ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | The name of the location from which we advertise the IPV6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6IpamPoolId">Ipv6IpamPoolId</a></code> | <code>string</code> | The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6NetmaskLength">Ipv6NetmaskLength</a></code> | <code>double</code> | The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6Pool">Ipv6Pool</a></code> | <code>string</code> | The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#vpc_id Ec2VpcCidrBlock#vpc_id}

---

##### `AmazonProvidedIpv6CidrBlock`<sup>Optional</sup> <a name="AmazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.amazonProvidedIpv6CidrBlock"></a>

```csharp
public bool|IResolvable AmazonProvidedIpv6CidrBlock { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.

You cannot specify the range of IPv6 addresses, or the size of the CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#amazon_provided_ipv_6_cidr_block Ec2VpcCidrBlock#amazon_provided_ipv_6_cidr_block}

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

An IPv4 CIDR block to associate with the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#cidr_block Ec2VpcCidrBlock#cidr_block}

---

##### `Ipv4IpamPoolId`<sup>Optional</sup> <a name="Ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4IpamPoolId"></a>

```csharp
public string Ipv4IpamPoolId { get; set; }
```

- *Type:* string

The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_4_ipam_pool_id Ec2VpcCidrBlock#ipv_4_ipam_pool_id}

---

##### `Ipv4NetmaskLength`<sup>Optional</sup> <a name="Ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4NetmaskLength"></a>

```csharp
public double Ipv4NetmaskLength { get; set; }
```

- *Type:* double

The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_4_netmask_length Ec2VpcCidrBlock#ipv_4_netmask_length}

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

An IPv6 CIDR block from the IPv6 address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block Ec2VpcCidrBlock#ipv_6_cidr_block}

---

##### `Ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="Ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```csharp
public string Ipv6CidrBlockNetworkBorderGroup { get; set; }
```

- *Type:* string

The name of the location from which we advertise the IPV6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block_network_border_group Ec2VpcCidrBlock#ipv_6_cidr_block_network_border_group}

---

##### `Ipv6IpamPoolId`<sup>Optional</sup> <a name="Ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6IpamPoolId"></a>

```csharp
public string Ipv6IpamPoolId { get; set; }
```

- *Type:* string

The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_ipam_pool_id Ec2VpcCidrBlock#ipv_6_ipam_pool_id}

---

##### `Ipv6NetmaskLength`<sup>Optional</sup> <a name="Ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6NetmaskLength"></a>

```csharp
public double Ipv6NetmaskLength { get; set; }
```

- *Type:* double

The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_netmask_length Ec2VpcCidrBlock#ipv_6_netmask_length}

---

##### `Ipv6Pool`<sup>Optional</sup> <a name="Ipv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6Pool"></a>

```csharp
public string Ipv6Pool { get; set; }
```

- *Type:* string

The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_pool Ec2VpcCidrBlock#ipv_6_pool}

---



