# `route53ResolverResolverQueryLoggingConfig` Submodule <a name="`route53ResolverResolverQueryLoggingConfig` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverQueryLoggingConfig <a name="Route53ResolverResolverQueryLoggingConfig" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_resolver_query_logging_config awscc_route53resolver_resolver_query_logging_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverResolverQueryLoggingConfig(Construct Scope, string Id, Route53ResolverResolverQueryLoggingConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig">Route53ResolverResolverQueryLoggingConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig">Route53ResolverResolverQueryLoggingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetDestinationArn">ResetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags"></a>

```csharp
private void PutTags(IResolvable|Route53ResolverResolverQueryLoggingConfigTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>[]

---

##### `ResetDestinationArn` <a name="ResetDestinationArn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetDestinationArn"></a>

```csharp
private void ResetDestinationArn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverResolverQueryLoggingConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverResolverQueryLoggingConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverResolverQueryLoggingConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Route53ResolverResolverQueryLoggingConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53ResolverResolverQueryLoggingConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverResolverQueryLoggingConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverResolverQueryLoggingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_resolver_query_logging_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverQueryLoggingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.associationCount">AssociationCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creatorRequestId">CreatorRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.resolverQueryLoggingConfigId">ResolverQueryLoggingConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.shareStatus">ShareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList">Route53ResolverResolverQueryLoggingConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociationCount`<sup>Required</sup> <a name="AssociationCount" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.associationCount"></a>

```csharp
public double AssociationCount { get; }
```

- *Type:* double

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.creatorRequestId"></a>

```csharp
public string CreatorRequestId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `ResolverQueryLoggingConfigId`<sup>Required</sup> <a name="ResolverQueryLoggingConfigId" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.resolverQueryLoggingConfigId"></a>

```csharp
public string ResolverQueryLoggingConfigId { get; }
```

- *Type:* string

---

##### `ShareStatus`<sup>Required</sup> <a name="ShareStatus" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.shareStatus"></a>

```csharp
public string ShareStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tags"></a>

```csharp
public Route53ResolverResolverQueryLoggingConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList">Route53ResolverResolverQueryLoggingConfigTagsList</a>

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tagsInput"></a>

```csharp
public IResolvable|Route53ResolverResolverQueryLoggingConfigTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>[]

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverQueryLoggingConfigConfig <a name="Route53ResolverResolverQueryLoggingConfigConfig" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverResolverQueryLoggingConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DestinationArn = null,
    string Name = null,
    IResolvable|Route53ResolverResolverQueryLoggingConfigTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.destinationArn">DestinationArn</a></code> | <code>string</code> | destination arn. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.name">Name</a></code> | <code>string</code> | ResolverQueryLogConfigName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationArn`<sup>Optional</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

destination arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_resolver_query_logging_config#destination_arn Route53ResolverResolverQueryLoggingConfig#destination_arn}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

ResolverQueryLogConfigName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_resolver_query_logging_config#name Route53ResolverResolverQueryLoggingConfig#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigConfig.property.tags"></a>

```csharp
public IResolvable|Route53ResolverResolverQueryLoggingConfigTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_resolver_query_logging_config#tags Route53ResolverResolverQueryLoggingConfig#tags}

---

### Route53ResolverResolverQueryLoggingConfigTags <a name="Route53ResolverResolverQueryLoggingConfigTags" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverResolverQueryLoggingConfigTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_resolver_query_logging_config#key Route53ResolverResolverQueryLoggingConfig#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53resolver_resolver_query_logging_config#value Route53ResolverResolverQueryLoggingConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverQueryLoggingConfigTagsList <a name="Route53ResolverResolverQueryLoggingConfigTagsList" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverResolverQueryLoggingConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get"></a>

```csharp
private Route53ResolverResolverQueryLoggingConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsList.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverResolverQueryLoggingConfigTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>[]

---


### Route53ResolverResolverQueryLoggingConfigTagsOutputReference <a name="Route53ResolverResolverQueryLoggingConfigTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Route53ResolverResolverQueryLoggingConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53ResolverResolverQueryLoggingConfigTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53ResolverResolverQueryLoggingConfig.Route53ResolverResolverQueryLoggingConfigTags">Route53ResolverResolverQueryLoggingConfigTags</a>

---



