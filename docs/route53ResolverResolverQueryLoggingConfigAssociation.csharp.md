# `route53ResolverResolverQueryLoggingConfigAssociation` Submodule <a name="`route53ResolverResolverQueryLoggingConfigAssociation` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverQueryLoggingConfigAssociation <a name="Route53ResolverResolverQueryLoggingConfigAssociation" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config_association awscc_route53resolver_resolver_query_logging_config_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverResolverQueryLoggingConfigAssociation(Construct Scope, string Id, Route53ResolverResolverQueryLoggingConfigAssociationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig">Route53ResolverResolverQueryLoggingConfigAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig">Route53ResolverResolverQueryLoggingConfigAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.resetResolverQueryLogConfigId">ResetResolverQueryLogConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.resetResourceId">ResetResourceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetResolverQueryLogConfigId` <a name="ResetResolverQueryLogConfigId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.resetResolverQueryLogConfigId"></a>

```csharp
private void ResetResolverQueryLogConfigId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfigAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverResolverQueryLoggingConfigAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverResolverQueryLoggingConfigAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverResolverQueryLoggingConfigAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverResolverQueryLoggingConfigAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfigAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverResolverQueryLoggingConfigAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverResolverQueryLoggingConfigAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverQueryLoggingConfigAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.error">Error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLoggingConfigAssociationId">ResolverQueryLoggingConfigAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLogConfigIdInput">ResolverQueryLogConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLogConfigId">ResolverQueryLogConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.error"></a>

```csharp
public string Error { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResolverQueryLoggingConfigAssociationId`<sup>Required</sup> <a name="ResolverQueryLoggingConfigAssociationId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLoggingConfigAssociationId"></a>

```csharp
public string ResolverQueryLoggingConfigAssociationId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ResolverQueryLogConfigIdInput`<sup>Optional</sup> <a name="ResolverQueryLogConfigIdInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLogConfigIdInput"></a>

```csharp
public string ResolverQueryLogConfigIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResolverQueryLogConfigId`<sup>Required</sup> <a name="ResolverQueryLogConfigId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resolverQueryLogConfigId"></a>

```csharp
public string ResolverQueryLogConfigId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverQueryLoggingConfigAssociationConfig <a name="Route53ResolverResolverQueryLoggingConfigAssociationConfig" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverResolverQueryLoggingConfigAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResolverQueryLogConfigId = null,
    string ResourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.resolverQueryLogConfigId">ResolverQueryLogConfigId</a></code> | <code>string</code> | ResolverQueryLogConfigId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | ResourceId. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResolverQueryLogConfigId`<sup>Optional</sup> <a name="ResolverQueryLogConfigId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.resolverQueryLogConfigId"></a>

```csharp
public string ResolverQueryLogConfigId { get; set; }
```

- *Type:* string

ResolverQueryLogConfigId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config_association#resolver_query_log_config_id Route53ResolverResolverQueryLoggingConfigAssociation#resolver_query_log_config_id}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfigAssociation.Route53ResolverResolverQueryLoggingConfigAssociationConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_resolver_query_logging_config_association#resource_id Route53ResolverResolverQueryLoggingConfigAssociation#resource_id}

---



