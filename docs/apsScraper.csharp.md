# `apsScraper` Submodule <a name="`apsScraper` Submodule" id="@cdktn/provider-awscc.apsScraper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsScraper <a name="ApsScraper" id="@cdktn/provider-awscc.apsScraper.ApsScraper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper awscc_aps_scraper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraper(Construct Scope, string Id, ApsScraperConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig">ApsScraperConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig">ApsScraperConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration">PutRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration">PutScrapeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration">PutScraperLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetRoleConfiguration">ResetRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetScraperLoggingConfiguration">ResetScraperLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apsScraper.ApsScraper.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apsScraper.ApsScraper.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apsScraper.ApsScraper.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination"></a>

```csharp
private void PutDestination(ApsScraperDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

---

##### `PutRoleConfiguration` <a name="PutRoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration"></a>

```csharp
private void PutRoleConfiguration(ApsScraperRoleConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

---

##### `PutScrapeConfiguration` <a name="PutScrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration"></a>

```csharp
private void PutScrapeConfiguration(ApsScraperScrapeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

---

##### `PutScraperLoggingConfiguration` <a name="PutScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration"></a>

```csharp
private void PutScraperLoggingConfiguration(ApsScraperScraperLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putSource"></a>

```csharp
private void PutSource(ApsScraperSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putTags"></a>

```csharp
private void PutTags(IResolvable|ApsScraperTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetRoleConfiguration` <a name="ResetRoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetRoleConfiguration"></a>

```csharp
private void ResetRoleConfiguration()
```

##### `ResetScraperLoggingConfiguration` <a name="ResetScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetScraperLoggingConfiguration"></a>

```csharp
private void ResetScraperLoggingConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApsScraper resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsScraper.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsScraper.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsScraper.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsScraper.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApsScraper resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApsScraper to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApsScraper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApsScraper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference">ApsScraperDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfiguration">RoleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference">ApsScraperRoleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfiguration">ScrapeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference">ApsScraperScrapeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperId">ScraperId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfiguration">ScraperLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference">ApsScraperScraperLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference">ApsScraperSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList">ApsScraperTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.destinationInput">DestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfigurationInput">RoleConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfigurationInput">ScrapeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfigurationInput">ScraperLoggingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.alias">Alias</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.destination"></a>

```csharp
public ApsScraperDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference">ApsScraperDestinationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RoleConfiguration`<sup>Required</sup> <a name="RoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfiguration"></a>

```csharp
public ApsScraperRoleConfigurationOutputReference RoleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference">ApsScraperRoleConfigurationOutputReference</a>

---

##### `ScrapeConfiguration`<sup>Required</sup> <a name="ScrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfiguration"></a>

```csharp
public ApsScraperScrapeConfigurationOutputReference ScrapeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference">ApsScraperScrapeConfigurationOutputReference</a>

---

##### `ScraperId`<sup>Required</sup> <a name="ScraperId" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperId"></a>

```csharp
public string ScraperId { get; }
```

- *Type:* string

---

##### `ScraperLoggingConfiguration`<sup>Required</sup> <a name="ScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfiguration"></a>

```csharp
public ApsScraperScraperLoggingConfigurationOutputReference ScraperLoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference">ApsScraperScraperLoggingConfigurationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.source"></a>

```csharp
public ApsScraperSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference">ApsScraperSourceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tags"></a>

```csharp
public ApsScraperTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList">ApsScraperTagsList</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.destinationInput"></a>

```csharp
public IResolvable|ApsScraperDestination DestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

---

##### `RoleConfigurationInput`<sup>Optional</sup> <a name="RoleConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfigurationInput"></a>

```csharp
public IResolvable|ApsScraperRoleConfiguration RoleConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

---

##### `ScrapeConfigurationInput`<sup>Optional</sup> <a name="ScrapeConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfigurationInput"></a>

```csharp
public IResolvable|ApsScraperScrapeConfiguration ScrapeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

---

##### `ScraperLoggingConfigurationInput`<sup>Optional</sup> <a name="ScraperLoggingConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfigurationInput"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfiguration ScraperLoggingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.sourceInput"></a>

```csharp
public IResolvable|ApsScraperSource SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tagsInput"></a>

```csharp
public IResolvable|ApsScraperTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApsScraperConfig <a name="ApsScraperConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ApsScraperDestination Destination,
    ApsScraperScrapeConfiguration ScrapeConfiguration,
    ApsScraperSource Source,
    string Alias = null,
    ApsScraperRoleConfiguration RoleConfiguration = null,
    ApsScraperScraperLoggingConfiguration ScraperLoggingConfiguration = null,
    IResolvable|ApsScraperTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | Scraper metrics destination. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scrapeConfiguration">ScrapeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | Scraper configuration. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | Scraper metrics source. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.alias">Alias</a></code> | <code>string</code> | Scraper alias. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.roleConfiguration">RoleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | Role configuration. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scraperLoggingConfiguration">ScraperLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | Configuration for scraper logging. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.destination"></a>

```csharp
public ApsScraperDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

Scraper metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#destination ApsScraper#destination}

---

##### `ScrapeConfiguration`<sup>Required</sup> <a name="ScrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scrapeConfiguration"></a>

```csharp
public ApsScraperScrapeConfiguration ScrapeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

Scraper configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scrape_configuration ApsScraper#scrape_configuration}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.source"></a>

```csharp
public ApsScraperSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

Scraper metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source ApsScraper#source}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Scraper alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#alias ApsScraper#alias}

---

##### `RoleConfiguration`<sup>Optional</sup> <a name="RoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.roleConfiguration"></a>

```csharp
public ApsScraperRoleConfiguration RoleConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

Role configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#role_configuration ApsScraper#role_configuration}

---

##### `ScraperLoggingConfiguration`<sup>Optional</sup> <a name="ScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scraperLoggingConfiguration"></a>

```csharp
public ApsScraperScraperLoggingConfiguration ScraperLoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

Configuration for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_logging_configuration ApsScraper#scraper_logging_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.tags"></a>

```csharp
public IResolvable|ApsScraperTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#tags ApsScraper#tags}

---

### ApsScraperDestination <a name="ApsScraperDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperDestination {
    ApsScraperDestinationAmpConfiguration AmpConfiguration = null,
    ApsScraperDestinationCloudwatchConfiguration CloudwatchConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.ampConfiguration">AmpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | Configuration for Amazon Managed Prometheus metrics destination. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | Configuration for CloudWatch metrics destination. |

---

##### `AmpConfiguration`<sup>Optional</sup> <a name="AmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.ampConfiguration"></a>

```csharp
public ApsScraperDestinationAmpConfiguration AmpConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

Configuration for Amazon Managed Prometheus metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#amp_configuration ApsScraper#amp_configuration}

---

##### `CloudwatchConfiguration`<sup>Optional</sup> <a name="CloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.cloudwatchConfiguration"></a>

```csharp
public ApsScraperDestinationCloudwatchConfiguration CloudwatchConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

Configuration for CloudWatch metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_configuration ApsScraper#cloudwatch_configuration}

---

### ApsScraperDestinationAmpConfiguration <a name="ApsScraperDestinationAmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperDestinationAmpConfiguration {
    string WorkspaceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.property.workspaceArn">WorkspaceArn</a></code> | <code>string</code> | ARN of an Amazon Managed Prometheus workspace. |

---

##### `WorkspaceArn`<sup>Optional</sup> <a name="WorkspaceArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.property.workspaceArn"></a>

```csharp
public string WorkspaceArn { get; set; }
```

- *Type:* string

ARN of an Amazon Managed Prometheus workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#workspace_arn ApsScraper#workspace_arn}

---

### ApsScraperDestinationCloudwatchConfiguration <a name="ApsScraperDestinationCloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperDestinationCloudwatchConfiguration {
    string DatasetArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.property.datasetArn">DatasetArn</a></code> | <code>string</code> | ARN of a CloudWatch dataset. |

---

##### `DatasetArn`<sup>Optional</sup> <a name="DatasetArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.property.datasetArn"></a>

```csharp
public string DatasetArn { get; set; }
```

- *Type:* string

ARN of a CloudWatch dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#dataset_arn ApsScraper#dataset_arn}

---

### ApsScraperRoleConfiguration <a name="ApsScraperRoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperRoleConfiguration {
    string SourceRoleArn = null,
    string TargetRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.sourceRoleArn">SourceRoleArn</a></code> | <code>string</code> | IAM Role in source account. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | IAM Role in the target account. |

---

##### `SourceRoleArn`<sup>Optional</sup> <a name="SourceRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.sourceRoleArn"></a>

```csharp
public string SourceRoleArn { get; set; }
```

- *Type:* string

IAM Role in source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source_role_arn ApsScraper#source_role_arn}

---

##### `TargetRoleArn`<sup>Optional</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; set; }
```

- *Type:* string

IAM Role in the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#target_role_arn ApsScraper#target_role_arn}

---

### ApsScraperScrapeConfiguration <a name="ApsScraperScrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScrapeConfiguration {
    string ConfigurationBlob = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.property.configurationBlob">ConfigurationBlob</a></code> | <code>string</code> | Prometheus compatible scrape configuration in base64 encoded blob format. |

---

##### `ConfigurationBlob`<sup>Optional</sup> <a name="ConfigurationBlob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.property.configurationBlob"></a>

```csharp
public string ConfigurationBlob { get; set; }
```

- *Type:* string

Prometheus compatible scrape configuration in base64 encoded blob format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#configuration_blob ApsScraper#configuration_blob}

---

### ApsScraperScraperLoggingConfiguration <a name="ApsScraperScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfiguration {
    ApsScraperScraperLoggingConfigurationLoggingDestination LoggingDestination = null,
    IResolvable|ApsScraperScraperLoggingConfigurationScraperComponents[] ScraperComponents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.loggingDestination">LoggingDestination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | Destination for scraper logging. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.scraperComponents">ScraperComponents</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_components ApsScraper#scraper_components}. |

---

##### `LoggingDestination`<sup>Optional</sup> <a name="LoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.loggingDestination"></a>

```csharp
public ApsScraperScraperLoggingConfigurationLoggingDestination LoggingDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

Destination for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#logging_destination ApsScraper#logging_destination}

---

##### `ScraperComponents`<sup>Optional</sup> <a name="ScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.scraperComponents"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationScraperComponents[] ScraperComponents { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_components ApsScraper#scraper_components}.

---

### ApsScraperScraperLoggingConfigurationLoggingDestination <a name="ApsScraperScraperLoggingConfigurationLoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationLoggingDestination {
    ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs CloudwatchLogs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | Represents a cloudwatch logs destination for scraper logging. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs"></a>

```csharp
public ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

Represents a cloudwatch logs destination for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_logs ApsScraper#cloudwatch_logs}

---

### ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs {
    string LogGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | ARN of the CloudWatch log group. |

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

ARN of the CloudWatch log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#log_group_arn ApsScraper#log_group_arn}

---

### ApsScraperScraperLoggingConfigurationScraperComponents <a name="ApsScraperScraperLoggingConfigurationScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationScraperComponents {
    ApsScraperScraperLoggingConfigurationScraperComponentsConfig Config = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#config ApsScraper#config}. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.type">Type</a></code> | <code>string</code> | Type of scraper component. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.config"></a>

```csharp
public ApsScraperScraperLoggingConfigurationScraperComponentsConfig Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#config ApsScraper#config}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of scraper component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#type ApsScraper#type}

---

### ApsScraperScraperLoggingConfigurationScraperComponentsConfig <a name="ApsScraperScraperLoggingConfigurationScraperComponentsConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationScraperComponentsConfig {
    System.Collections.Generic.IDictionary<string, string> Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#options ApsScraper#options}. |

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#options ApsScraper#options}.

---

### ApsScraperSource <a name="ApsScraperSource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperSource {
    ApsScraperSourceEksConfiguration EksConfiguration = null,
    ApsScraperSourceVpcConfiguration VpcConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | Configuration for EKS metrics source. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | Configuration for VPC metrics source. |

---

##### `EksConfiguration`<sup>Optional</sup> <a name="EksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.eksConfiguration"></a>

```csharp
public ApsScraperSourceEksConfiguration EksConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

Configuration for EKS metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#eks_configuration ApsScraper#eks_configuration}

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.vpcConfiguration"></a>

```csharp
public ApsScraperSourceVpcConfiguration VpcConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

Configuration for VPC metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#vpc_configuration ApsScraper#vpc_configuration}

---

### ApsScraperSourceEksConfiguration <a name="ApsScraperSourceEksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperSourceEksConfiguration {
    string ClusterArn = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.clusterArn">ClusterArn</a></code> | <code>string</code> | ARN of an EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | List of security group IDs. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | List of subnet IDs. |

---

##### `ClusterArn`<sup>Optional</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

ARN of an EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cluster_arn ApsScraper#cluster_arn}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

List of security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

List of subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}

---

### ApsScraperSourceVpcConfiguration <a name="ApsScraperSourceVpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperSourceVpcConfiguration {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | List of security group IDs. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | List of subnet IDs. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

List of security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

List of subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}

---

### ApsScraperTags <a name="ApsScraperTags" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#key ApsScraper#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#value ApsScraper#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsScraperDestinationAmpConfigurationOutputReference <a name="ApsScraperDestinationAmpConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperDestinationAmpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resetWorkspaceArn">ResetWorkspaceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceArn` <a name="ResetWorkspaceArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resetWorkspaceArn"></a>

```csharp
private void ResetWorkspaceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArnInput">WorkspaceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArn">WorkspaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceArnInput`<sup>Optional</sup> <a name="WorkspaceArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArnInput"></a>

```csharp
public string WorkspaceArnInput { get; }
```

- *Type:* string

---

##### `WorkspaceArn`<sup>Required</sup> <a name="WorkspaceArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArn"></a>

```csharp
public string WorkspaceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperDestinationAmpConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

---


### ApsScraperDestinationCloudwatchConfigurationOutputReference <a name="ApsScraperDestinationCloudwatchConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperDestinationCloudwatchConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resetDatasetArn">ResetDatasetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetArn` <a name="ResetDatasetArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resetDatasetArn"></a>

```csharp
private void ResetDatasetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArnInput">DatasetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArn">DatasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetArnInput`<sup>Optional</sup> <a name="DatasetArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArnInput"></a>

```csharp
public string DatasetArnInput { get; }
```

- *Type:* string

---

##### `DatasetArn`<sup>Required</sup> <a name="DatasetArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArn"></a>

```csharp
public string DatasetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperDestinationCloudwatchConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

---


### ApsScraperDestinationOutputReference <a name="ApsScraperDestinationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration">PutAmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration">PutCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetAmpConfiguration">ResetAmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetCloudwatchConfiguration">ResetCloudwatchConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmpConfiguration` <a name="PutAmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration"></a>

```csharp
private void PutAmpConfiguration(ApsScraperDestinationAmpConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

---

##### `PutCloudwatchConfiguration` <a name="PutCloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration"></a>

```csharp
private void PutCloudwatchConfiguration(ApsScraperDestinationCloudwatchConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

---

##### `ResetAmpConfiguration` <a name="ResetAmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetAmpConfiguration"></a>

```csharp
private void ResetAmpConfiguration()
```

##### `ResetCloudwatchConfiguration` <a name="ResetCloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetCloudwatchConfiguration"></a>

```csharp
private void ResetCloudwatchConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfiguration">AmpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference">ApsScraperDestinationAmpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference">ApsScraperDestinationCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfigurationInput">AmpConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfigurationInput">CloudwatchConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmpConfiguration`<sup>Required</sup> <a name="AmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfiguration"></a>

```csharp
public ApsScraperDestinationAmpConfigurationOutputReference AmpConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference">ApsScraperDestinationAmpConfigurationOutputReference</a>

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfiguration"></a>

```csharp
public ApsScraperDestinationCloudwatchConfigurationOutputReference CloudwatchConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference">ApsScraperDestinationCloudwatchConfigurationOutputReference</a>

---

##### `AmpConfigurationInput`<sup>Optional</sup> <a name="AmpConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfigurationInput"></a>

```csharp
public IResolvable|ApsScraperDestinationAmpConfiguration AmpConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

---

##### `CloudwatchConfigurationInput`<sup>Optional</sup> <a name="CloudwatchConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfigurationInput"></a>

```csharp
public IResolvable|ApsScraperDestinationCloudwatchConfiguration CloudwatchConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

---


### ApsScraperRoleConfigurationOutputReference <a name="ApsScraperRoleConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperRoleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetSourceRoleArn">ResetSourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetTargetRoleArn">ResetTargetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceRoleArn` <a name="ResetSourceRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetSourceRoleArn"></a>

```csharp
private void ResetSourceRoleArn()
```

##### `ResetTargetRoleArn` <a name="ResetTargetRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetTargetRoleArn"></a>

```csharp
private void ResetTargetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArnInput">SourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArnInput">TargetRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArn">SourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceRoleArnInput`<sup>Optional</sup> <a name="SourceRoleArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArnInput"></a>

```csharp
public string SourceRoleArnInput { get; }
```

- *Type:* string

---

##### `TargetRoleArnInput`<sup>Optional</sup> <a name="TargetRoleArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArnInput"></a>

```csharp
public string TargetRoleArnInput { get; }
```

- *Type:* string

---

##### `SourceRoleArn`<sup>Required</sup> <a name="SourceRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArn"></a>

```csharp
public string SourceRoleArn { get; }
```

- *Type:* string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperRoleConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

---


### ApsScraperScrapeConfigurationOutputReference <a name="ApsScraperScrapeConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScrapeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resetConfigurationBlob">ResetConfigurationBlob</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationBlob` <a name="ResetConfigurationBlob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resetConfigurationBlob"></a>

```csharp
private void ResetConfigurationBlob()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlobInput">ConfigurationBlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlob">ConfigurationBlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationBlobInput`<sup>Optional</sup> <a name="ConfigurationBlobInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlobInput"></a>

```csharp
public string ConfigurationBlobInput { get; }
```

- *Type:* string

---

##### `ConfigurationBlob`<sup>Required</sup> <a name="ConfigurationBlob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlob"></a>

```csharp
public string ConfigurationBlob { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperScrapeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

---


### ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---


### ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs"></a>

```csharp
public ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationLoggingDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

---


### ApsScraperScraperLoggingConfigurationOutputReference <a name="ApsScraperScraperLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination">PutLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents">PutScraperComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetLoggingDestination">ResetLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetScraperComponents">ResetScraperComponents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingDestination` <a name="PutLoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination"></a>

```csharp
private void PutLoggingDestination(ApsScraperScraperLoggingConfigurationLoggingDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

---

##### `PutScraperComponents` <a name="PutScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents"></a>

```csharp
private void PutScraperComponents(IResolvable|ApsScraperScraperLoggingConfigurationScraperComponents[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]

---

##### `ResetLoggingDestination` <a name="ResetLoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetLoggingDestination"></a>

```csharp
private void ResetLoggingDestination()
```

##### `ResetScraperComponents` <a name="ResetScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetScraperComponents"></a>

```csharp
private void ResetScraperComponents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestination">LoggingDestination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponents">ScraperComponents</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList">ApsScraperScraperLoggingConfigurationScraperComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestinationInput">LoggingDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponentsInput">ScraperComponentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingDestination`<sup>Required</sup> <a name="LoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestination"></a>

```csharp
public ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference LoggingDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference</a>

---

##### `ScraperComponents`<sup>Required</sup> <a name="ScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponents"></a>

```csharp
public ApsScraperScraperLoggingConfigurationScraperComponentsList ScraperComponents { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList">ApsScraperScraperLoggingConfigurationScraperComponentsList</a>

---

##### `LoggingDestinationInput`<sup>Optional</sup> <a name="LoggingDestinationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestinationInput"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationLoggingDestination LoggingDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

---

##### `ScraperComponentsInput`<sup>Optional</sup> <a name="ScraperComponentsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponentsInput"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationScraperComponents[] ScraperComponentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

---


### ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference <a name="ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationScraperComponentsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---


### ApsScraperScraperLoggingConfigurationScraperComponentsList <a name="ApsScraperScraperLoggingConfigurationScraperComponentsList" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationScraperComponentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get"></a>

```csharp
private ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationScraperComponents[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>[]

---


### ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference <a name="ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig"></a>

```csharp
private void PutConfig(ApsScraperScraperLoggingConfigurationScraperComponentsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference">ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.config"></a>

```csharp
public ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference">ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.configInput"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationScraperComponentsConfig ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperScraperLoggingConfigurationScraperComponents InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>

---


### ApsScraperSourceEksConfigurationOutputReference <a name="ApsScraperSourceEksConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperSourceEksConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetClusterArn">ResetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterArn` <a name="ResetClusterArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetClusterArn"></a>

```csharp
private void ResetClusterArn()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperSourceEksConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

---


### ApsScraperSourceOutputReference <a name="ApsScraperSourceOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration">PutEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetEksConfiguration">ResetEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEksConfiguration` <a name="PutEksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration"></a>

```csharp
private void PutEksConfiguration(ApsScraperSourceEksConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration"></a>

```csharp
private void PutVpcConfiguration(ApsScraperSourceVpcConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

---

##### `ResetEksConfiguration` <a name="ResetEksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetEksConfiguration"></a>

```csharp
private void ResetEksConfiguration()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetVpcConfiguration"></a>

```csharp
private void ResetVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference">ApsScraperSourceEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference">ApsScraperSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfigurationInput">EksConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EksConfiguration`<sup>Required</sup> <a name="EksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfiguration"></a>

```csharp
public ApsScraperSourceEksConfigurationOutputReference EksConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference">ApsScraperSourceEksConfigurationOutputReference</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfiguration"></a>

```csharp
public ApsScraperSourceVpcConfigurationOutputReference VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference">ApsScraperSourceVpcConfigurationOutputReference</a>

---

##### `EksConfigurationInput`<sup>Optional</sup> <a name="EksConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfigurationInput"></a>

```csharp
public IResolvable|ApsScraperSourceEksConfiguration EksConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfigurationInput"></a>

```csharp
public IResolvable|ApsScraperSourceVpcConfiguration VpcConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

---


### ApsScraperSourceVpcConfigurationOutputReference <a name="ApsScraperSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperSourceVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperSourceVpcConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

---


### ApsScraperTagsList <a name="ApsScraperTagsList" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get"></a>

```csharp
private ApsScraperTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>[]

---


### ApsScraperTagsOutputReference <a name="ApsScraperTagsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsScraperTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsScraperTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>

---



