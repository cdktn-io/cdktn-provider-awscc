# `servicediscoveryPrivateDnsNamespace` Submodule <a name="`servicediscoveryPrivateDnsNamespace` Submodule" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryPrivateDnsNamespace <a name="ServicediscoveryPrivateDnsNamespace" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace awscc_servicediscovery_private_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespace(Construct Scope, string Id, ServicediscoveryPrivateDnsNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig">ServicediscoveryPrivateDnsNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig">ServicediscoveryPrivateDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties"></a>

```csharp
private void PutProperties(ServicediscoveryPrivateDnsNamespaceProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags"></a>

```csharp
private void PutTags(IResolvable|ServicediscoveryPrivateDnsNamespaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetVpc"></a>

```csharp
private void ResetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryPrivateDnsNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryPrivateDnsNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryPrivateDnsNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryPrivateDnsNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicediscoveryPrivateDnsNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicediscoveryPrivateDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryPrivateDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId">PrivateDnsNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList">ServicediscoveryPrivateDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.propertiesInput">PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpcInput">VpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpc">Vpc</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateDnsNamespaceId`<sup>Required</sup> <a name="PrivateDnsNamespaceId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId"></a>

```csharp
public string PrivateDnsNamespaceId { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.properties"></a>

```csharp
public ServicediscoveryPrivateDnsNamespacePropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tags"></a>

```csharp
public ServicediscoveryPrivateDnsNamespaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList">ServicediscoveryPrivateDnsNamespaceTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.propertiesInput"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespaceProperties PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tagsInput"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpcInput"></a>

```csharp
public string VpcInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpc"></a>

```csharp
public string Vpc { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryPrivateDnsNamespaceConfig <a name="ServicediscoveryPrivateDnsNamespaceConfig" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    ServicediscoveryPrivateDnsNamespaceProperties Properties = null,
    IResolvable|ServicediscoveryPrivateDnsNamespaceTags[] Tags = null,
    string Vpc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.name">Name</a></code> | <code>string</code> | The name that you want to assign to this namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.description">Description</a></code> | <code>string</code> | A description of the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | Properties of the private DNS namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]</code> | The tags for the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.vpc">Vpc</a></code> | <code>string</code> | The ID of the Amazon VPC that you want to associate the namespace with. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name that you want to assign to this namespace.

When you create a private DNS namespace, AWS Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#name ServicediscoveryPrivateDnsNamespace#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#description ServicediscoveryPrivateDnsNamespace#description}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.properties"></a>

```csharp
public ServicediscoveryPrivateDnsNamespaceProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

Properties of the private DNS namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#properties ServicediscoveryPrivateDnsNamespace#properties}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.tags"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]

The tags for the namespace.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#tags ServicediscoveryPrivateDnsNamespace#tags}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.vpc"></a>

```csharp
public string Vpc { get; set; }
```

- *Type:* string

The ID of the Amazon VPC that you want to associate the namespace with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#vpc ServicediscoveryPrivateDnsNamespace#vpc}

---

### ServicediscoveryPrivateDnsNamespaceProperties <a name="ServicediscoveryPrivateDnsNamespaceProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespaceProperties {
    ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties DnsProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.property.dnsProperties">DnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#dns_properties ServicediscoveryPrivateDnsNamespace#dns_properties}. |

---

##### `DnsProperties`<sup>Optional</sup> <a name="DnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.property.dnsProperties"></a>

```csharp
public ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties DnsProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#dns_properties ServicediscoveryPrivateDnsNamespace#dns_properties}.

---

### ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties {
    ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa Soa = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.property.soa">Soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#soa ServicediscoveryPrivateDnsNamespace#soa}. |

---

##### `Soa`<sup>Optional</sup> <a name="Soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.property.soa"></a>

```csharp
public ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa Soa { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#soa ServicediscoveryPrivateDnsNamespace#soa}.

---

### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa {
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.property.ttl">Ttl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#ttl ServicediscoveryPrivateDnsNamespace#ttl}. |

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#ttl ServicediscoveryPrivateDnsNamespace#ttl}.

---

### ServicediscoveryPrivateDnsNamespaceTags <a name="ServicediscoveryPrivateDnsNamespaceTags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#key ServicediscoveryPrivateDnsNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#value ServicediscoveryPrivateDnsNamespace#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#key ServicediscoveryPrivateDnsNamespace#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#value ServicediscoveryPrivateDnsNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa">PutSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa">ResetSoa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSoa` <a name="PutSoa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa"></a>

```csharp
private void PutSoa(ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `ResetSoa` <a name="ResetSoa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa"></a>

```csharp
private void ResetSoa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput">SoaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```csharp
public ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference Soa { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `SoaInput`<sup>Optional</sup> <a name="SoaInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa SoaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---


### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### ServicediscoveryPrivateDnsNamespacePropertiesOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespacePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties">PutDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resetDnsProperties">ResetDnsProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsProperties` <a name="PutDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties"></a>

```csharp
private void PutDnsProperties(ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---

##### `ResetDnsProperties` <a name="ResetDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resetDnsProperties"></a>

```csharp
private void ResetDnsProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties">DnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput">DnsPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsProperties`<sup>Required</sup> <a name="DnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```csharp
public ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference DnsProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `DnsPropertiesInput`<sup>Optional</sup> <a name="DnsPropertiesInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties DnsPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespaceProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

---


### ServicediscoveryPrivateDnsNamespaceTagsList <a name="ServicediscoveryPrivateDnsNamespaceTagsList" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get"></a>

```csharp
private ServicediscoveryPrivateDnsNamespaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]

---


### ServicediscoveryPrivateDnsNamespaceTagsOutputReference <a name="ServicediscoveryPrivateDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPrivateDnsNamespaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPrivateDnsNamespaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>

---



