# `ec2LocalGatewayVirtualInterfaceGroup` Submodule <a name="`ec2LocalGatewayVirtualInterfaceGroup` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayVirtualInterfaceGroup <a name="Ec2LocalGatewayVirtualInterfaceGroup" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface_group awscc_ec2_local_gateway_virtual_interface_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceGroup(Construct Scope, string Id, Ec2LocalGatewayVirtualInterfaceGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig">Ec2LocalGatewayVirtualInterfaceGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig">Ec2LocalGatewayVirtualInterfaceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsn">ResetLocalBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsnExtended">ResetLocalBgpAsnExtended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2LocalGatewayVirtualInterfaceGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>[]

---

##### `ResetLocalBgpAsn` <a name="ResetLocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsn"></a>

```csharp
private void ResetLocalBgpAsn()
```

##### `ResetLocalBgpAsnExtended` <a name="ResetLocalBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsnExtended"></a>

```csharp
private void ResetLocalBgpAsnExtended()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayVirtualInterfaceGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayVirtualInterfaceGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayVirtualInterfaceGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayVirtualInterfaceGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2LocalGatewayVirtualInterfaceGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2LocalGatewayVirtualInterfaceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayVirtualInterfaceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.configurationState">ConfigurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupArn">LocalGatewayVirtualInterfaceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupId">LocalGatewayVirtualInterfaceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds">LocalGatewayVirtualInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList">Ec2LocalGatewayVirtualInterfaceGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtendedInput">LocalBgpAsnExtendedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnInput">LocalBgpAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsn">LocalBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtended">LocalBgpAsnExtended</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.configurationState"></a>

```csharp
public string ConfigurationState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceGroupArn`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupArn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupArn"></a>

```csharp
public string LocalGatewayVirtualInterfaceGroupArn { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupId"></a>

```csharp
public string LocalGatewayVirtualInterfaceGroupId { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceIds" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds"></a>

```csharp
public string[] LocalGatewayVirtualInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tags"></a>

```csharp
public Ec2LocalGatewayVirtualInterfaceGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList">Ec2LocalGatewayVirtualInterfaceGroupTagsList</a>

---

##### `LocalBgpAsnExtendedInput`<sup>Optional</sup> <a name="LocalBgpAsnExtendedInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtendedInput"></a>

```csharp
public double LocalBgpAsnExtendedInput { get; }
```

- *Type:* double

---

##### `LocalBgpAsnInput`<sup>Optional</sup> <a name="LocalBgpAsnInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnInput"></a>

```csharp
public double LocalBgpAsnInput { get; }
```

- *Type:* double

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput"></a>

```csharp
public string LocalGatewayIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tagsInput"></a>

```csharp
public IResolvable|Ec2LocalGatewayVirtualInterfaceGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>[]

---

##### `LocalBgpAsn`<sup>Required</sup> <a name="LocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsn"></a>

```csharp
public double LocalBgpAsn { get; }
```

- *Type:* double

---

##### `LocalBgpAsnExtended`<sup>Required</sup> <a name="LocalBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtended"></a>

```csharp
public double LocalBgpAsnExtended { get; }
```

- *Type:* double

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayVirtualInterfaceGroupConfig <a name="Ec2LocalGatewayVirtualInterfaceGroupConfig" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LocalGatewayId,
    double LocalBgpAsn = null,
    double LocalBgpAsnExtended = null,
    IResolvable|Ec2LocalGatewayVirtualInterfaceGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsn">LocalBgpAsn</a></code> | <code>double</code> | The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP). |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsnExtended">LocalBgpAsnExtended</a></code> | <code>double</code> | The extended 32-bit ASN for the local BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>[]</code> | The tags assigned to the virtual interface group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; set; }
```

- *Type:* string

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_gateway_id Ec2LocalGatewayVirtualInterfaceGroup#local_gateway_id}

---

##### `LocalBgpAsn`<sup>Optional</sup> <a name="LocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsn"></a>

```csharp
public double LocalBgpAsn { get; set; }
```

- *Type:* double

The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn Ec2LocalGatewayVirtualInterfaceGroup#local_bgp_asn}

---

##### `LocalBgpAsnExtended`<sup>Optional</sup> <a name="LocalBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsnExtended"></a>

```csharp
public double LocalBgpAsnExtended { get; set; }
```

- *Type:* double

The extended 32-bit ASN for the local BGP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn_extended Ec2LocalGatewayVirtualInterfaceGroup#local_bgp_asn_extended}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.tags"></a>

```csharp
public IResolvable|Ec2LocalGatewayVirtualInterfaceGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>[]

The tags assigned to the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface_group#tags Ec2LocalGatewayVirtualInterfaceGroup#tags}

---

### Ec2LocalGatewayVirtualInterfaceGroupTags <a name="Ec2LocalGatewayVirtualInterfaceGroupTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface_group#key Ec2LocalGatewayVirtualInterfaceGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface_group#value Ec2LocalGatewayVirtualInterfaceGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayVirtualInterfaceGroupTagsList <a name="Ec2LocalGatewayVirtualInterfaceGroupTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get"></a>

```csharp
private Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2LocalGatewayVirtualInterfaceGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>[]

---


### Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference <a name="Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2LocalGatewayVirtualInterfaceGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags">Ec2LocalGatewayVirtualInterfaceGroupTags</a>

---



