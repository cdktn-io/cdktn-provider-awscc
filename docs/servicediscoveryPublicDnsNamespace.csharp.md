# `servicediscoveryPublicDnsNamespace` Submodule <a name="`servicediscoveryPublicDnsNamespace` Submodule" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryPublicDnsNamespace <a name="ServicediscoveryPublicDnsNamespace" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace awscc_servicediscovery_public_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespace(Construct Scope, string Id, ServicediscoveryPublicDnsNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig">ServicediscoveryPublicDnsNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig">ServicediscoveryPublicDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties"></a>

```csharp
private void PutProperties(ServicediscoveryPublicDnsNamespaceProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags"></a>

```csharp
private void PutTags(IResolvable|ServicediscoveryPublicDnsNamespaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryPublicDnsNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryPublicDnsNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryPublicDnsNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryPublicDnsNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicediscoveryPublicDnsNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicediscoveryPublicDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryPublicDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId">PublicDnsNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList">ServicediscoveryPublicDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.propertiesInput">PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.properties"></a>

```csharp
public ServicediscoveryPublicDnsNamespacePropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesOutputReference</a>

---

##### `PublicDnsNamespaceId`<sup>Required</sup> <a name="PublicDnsNamespaceId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId"></a>

```csharp
public string PublicDnsNamespaceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tags"></a>

```csharp
public ServicediscoveryPublicDnsNamespaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList">ServicediscoveryPublicDnsNamespaceTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.propertiesInput"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespaceProperties PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tagsInput"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryPublicDnsNamespaceConfig <a name="ServicediscoveryPublicDnsNamespaceConfig" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    ServicediscoveryPublicDnsNamespaceProperties Properties = null,
    IResolvable|ServicediscoveryPublicDnsNamespaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.name">Name</a></code> | <code>string</code> | The name that you want to assign to this namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.description">Description</a></code> | <code>string</code> | A description for the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | Properties for the public DNS namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]</code> | The tags for the namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name that you want to assign to this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#name ServicediscoveryPublicDnsNamespace#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#description ServicediscoveryPublicDnsNamespace#description}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.properties"></a>

```csharp
public ServicediscoveryPublicDnsNamespaceProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

Properties for the public DNS namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#properties ServicediscoveryPublicDnsNamespace#properties}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.tags"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]

The tags for the namespace.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#tags ServicediscoveryPublicDnsNamespace#tags}

---

### ServicediscoveryPublicDnsNamespaceProperties <a name="ServicediscoveryPublicDnsNamespaceProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespaceProperties {
    ServicediscoveryPublicDnsNamespacePropertiesDnsProperties DnsProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.property.dnsProperties">DnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#dns_properties ServicediscoveryPublicDnsNamespace#dns_properties}. |

---

##### `DnsProperties`<sup>Optional</sup> <a name="DnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.property.dnsProperties"></a>

```csharp
public ServicediscoveryPublicDnsNamespacePropertiesDnsProperties DnsProperties { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#dns_properties ServicediscoveryPublicDnsNamespace#dns_properties}.

---

### ServicediscoveryPublicDnsNamespacePropertiesDnsProperties <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespacePropertiesDnsProperties {
    ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa Soa = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.property.soa">Soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#soa ServicediscoveryPublicDnsNamespace#soa}. |

---

##### `Soa`<sup>Optional</sup> <a name="Soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.property.soa"></a>

```csharp
public ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa Soa { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#soa ServicediscoveryPublicDnsNamespace#soa}.

---

### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa {
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.property.ttl">Ttl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#ttl ServicediscoveryPublicDnsNamespace#ttl}. |

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#ttl ServicediscoveryPublicDnsNamespace#ttl}.

---

### ServicediscoveryPublicDnsNamespaceTags <a name="ServicediscoveryPublicDnsNamespaceTags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#key ServicediscoveryPublicDnsNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#value ServicediscoveryPublicDnsNamespace#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#key ServicediscoveryPublicDnsNamespace#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#value ServicediscoveryPublicDnsNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa">PutSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa">ResetSoa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSoa` <a name="PutSoa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa"></a>

```csharp
private void PutSoa(ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `ResetSoa` <a name="ResetSoa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa"></a>

```csharp
private void ResetSoa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput">SoaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```csharp
public ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference Soa { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `SoaInput`<sup>Optional</sup> <a name="SoaInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa SoaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespacePropertiesDnsProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---


### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### ServicediscoveryPublicDnsNamespacePropertiesOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespacePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties">PutDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resetDnsProperties">ResetDnsProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsProperties` <a name="PutDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties"></a>

```csharp
private void PutDnsProperties(ServicediscoveryPublicDnsNamespacePropertiesDnsProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---

##### `ResetDnsProperties` <a name="ResetDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resetDnsProperties"></a>

```csharp
private void ResetDnsProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties">DnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput">DnsPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsProperties`<sup>Required</sup> <a name="DnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```csharp
public ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference DnsProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `DnsPropertiesInput`<sup>Optional</sup> <a name="DnsPropertiesInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespacePropertiesDnsProperties DnsPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespaceProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

---


### ServicediscoveryPublicDnsNamespaceTagsList <a name="ServicediscoveryPublicDnsNamespaceTagsList" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get"></a>

```csharp
private ServicediscoveryPublicDnsNamespaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]

---


### ServicediscoveryPublicDnsNamespaceTagsOutputReference <a name="ServicediscoveryPublicDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryPublicDnsNamespaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryPublicDnsNamespaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>

---



