# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktn/provider-awscc.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler awscc_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawler(Construct Scope, string Id, GlueCrawlerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration">PutLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy">PutRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy">PutSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetClassifiers">ResetClassifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetCrawlerSecurityConfiguration">ResetCrawlerSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetLakeFormationConfiguration">ResetLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetRecrawlPolicy">ResetRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchemaChangePolicy">ResetSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTablePrefix">ResetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLakeFormationConfiguration` <a name="PutLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration"></a>

```csharp
private void PutLakeFormationConfiguration(GlueCrawlerLakeFormationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `PutRecrawlPolicy` <a name="PutRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```csharp
private void PutRecrawlPolicy(GlueCrawlerRecrawlPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule"></a>

```csharp
private void PutSchedule(GlueCrawlerSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---

##### `PutSchemaChangePolicy` <a name="PutSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```csharp
private void PutSchemaChangePolicy(GlueCrawlerSchemaChangePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets"></a>

```csharp
private void PutTargets(GlueCrawlerTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---

##### `ResetClassifiers` <a name="ResetClassifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetClassifiers"></a>

```csharp
private void ResetClassifiers()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetCrawlerSecurityConfiguration` <a name="ResetCrawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetCrawlerSecurityConfiguration"></a>

```csharp
private void ResetCrawlerSecurityConfiguration()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLakeFormationConfiguration` <a name="ResetLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetLakeFormationConfiguration"></a>

```csharp
private void ResetLakeFormationConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRecrawlPolicy` <a name="ResetRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```csharp
private void ResetRecrawlPolicy()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetSchemaChangePolicy` <a name="ResetSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```csharp
private void ResetSchemaChangePolicy()
```

##### `ResetTablePrefix` <a name="ResetTablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```csharp
private void ResetTablePrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueCrawler resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueCrawler.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueCrawler.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueCrawler.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueCrawler.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueCrawler resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueCrawler to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueCrawler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueCrawler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicy">RecrawlPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference">GlueCrawlerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicy">SchemaChangePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference">GlueCrawlerTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiersInput">ClassifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configurationInput">ConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfigurationInput">CrawlerSecurityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput">LakeFormationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicyInput">RecrawlPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">SchemaChangePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefixInput">TablePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiers">Classifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configuration">Configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfiguration">CrawlerSecurityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefix">TablePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tags">Tags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LakeFormationConfiguration`<sup>Required</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfiguration"></a>

```csharp
public GlueCrawlerLakeFormationConfigurationOutputReference LakeFormationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `RecrawlPolicy`<sup>Required</sup> <a name="RecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```csharp
public GlueCrawlerRecrawlPolicyOutputReference RecrawlPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schedule"></a>

```csharp
public GlueCrawlerScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference">GlueCrawlerScheduleOutputReference</a>

---

##### `SchemaChangePolicy`<sup>Required</sup> <a name="SchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```csharp
public GlueCrawlerSchemaChangePolicyOutputReference SchemaChangePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targets"></a>

```csharp
public GlueCrawlerTargetsOutputReference Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference">GlueCrawlerTargetsOutputReference</a>

---

##### `ClassifiersInput`<sup>Optional</sup> <a name="ClassifiersInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```csharp
public string[] ClassifiersInput { get; }
```

- *Type:* string[]

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configurationInput"></a>

```csharp
public string ConfigurationInput { get; }
```

- *Type:* string

---

##### `CrawlerSecurityConfigurationInput`<sup>Optional</sup> <a name="CrawlerSecurityConfigurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfigurationInput"></a>

```csharp
public string CrawlerSecurityConfigurationInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LakeFormationConfigurationInput`<sup>Optional</sup> <a name="LakeFormationConfigurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput"></a>

```csharp
public IResolvable|GlueCrawlerLakeFormationConfiguration LakeFormationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecrawlPolicyInput`<sup>Optional</sup> <a name="RecrawlPolicyInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```csharp
public IResolvable|GlueCrawlerRecrawlPolicy RecrawlPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```csharp
public IResolvable|GlueCrawlerSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---

##### `SchemaChangePolicyInput`<sup>Optional</sup> <a name="SchemaChangePolicyInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```csharp
public IResolvable|GlueCrawlerSchemaChangePolicy SchemaChangePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `TablePrefixInput`<sup>Optional</sup> <a name="TablePrefixInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```csharp
public string TablePrefixInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargets TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---

##### `Classifiers`<sup>Required</sup> <a name="Classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiers"></a>

```csharp
public string[] Classifiers { get; }
```

- *Type:* string[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configuration"></a>

```csharp
public string Configuration { get; }
```

- *Type:* string

---

##### `CrawlerSecurityConfiguration`<sup>Required</sup> <a name="CrawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfiguration"></a>

```csharp
public string CrawlerSecurityConfiguration { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```csharp
public string TablePrefix { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Role,
    GlueCrawlerTargets Targets,
    string[] Classifiers = null,
    string Configuration = null,
    string CrawlerSecurityConfiguration = null,
    string DatabaseName = null,
    string Description = null,
    GlueCrawlerLakeFormationConfiguration LakeFormationConfiguration = null,
    string Name = null,
    GlueCrawlerRecrawlPolicy RecrawlPolicy = null,
    GlueCrawlerSchedule Schedule = null,
    GlueCrawlerSchemaChangePolicy SchemaChangePolicy = null,
    string TablePrefix = null,
    string Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.role">Role</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | Specifies data stores to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.classifiers">Classifiers</a></code> | <code>string[]</code> | A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.configuration">Configuration</a></code> | <code>string</code> | Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.crawlerSecurityConfiguration">CrawlerSecurityConfiguration</a></code> | <code>string</code> | The name of the SecurityConfiguration structure to be used by this crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database in which the crawler's output is stored. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.description">Description</a></code> | <code>string</code> | A description of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | Specifies AWS Lake Formation configuration settings for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.name">Name</a></code> | <code>string</code> | The name of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">RecrawlPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | A scheduling object using a cron statement to schedule an event. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">SchemaChangePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | The policy that specifies update and delete behaviors for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tablePrefix">TablePrefix</a></code> | <code>string</code> | The prefix added to the names of tables that are created. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tags">Tags</a></code> | <code>string</code> | The tags to use with this crawler. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#role GlueCrawler#role}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.targets"></a>

```csharp
public GlueCrawlerTargets Targets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

Specifies data stores to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#targets GlueCrawler#targets}

---

##### `Classifiers`<sup>Optional</sup> <a name="Classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```csharp
public string[] Classifiers { get; set; }
```

- *Type:* string[]

A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```csharp
public string Configuration { get; set; }
```

- *Type:* string

Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#configuration GlueCrawler#configuration}

---

##### `CrawlerSecurityConfiguration`<sup>Optional</sup> <a name="CrawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.crawlerSecurityConfiguration"></a>

```csharp
public string CrawlerSecurityConfiguration { get; set; }
```

- *Type:* string

The name of the SecurityConfiguration structure to be used by this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#crawler_security_configuration GlueCrawler#crawler_security_configuration}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database in which the crawler's output is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#description GlueCrawler#description}

---

##### `LakeFormationConfiguration`<sup>Optional</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration"></a>

```csharp
public GlueCrawlerLakeFormationConfiguration LakeFormationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

Specifies AWS Lake Formation configuration settings for the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#name GlueCrawler#name}

---

##### `RecrawlPolicy`<sup>Optional</sup> <a name="RecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```csharp
public GlueCrawlerRecrawlPolicy RecrawlPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

For more information, see Incremental Crawls in AWS Glue in the developer guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```csharp
public GlueCrawlerSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

A scheduling object using a cron statement to schedule an event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schedule GlueCrawler#schedule}

---

##### `SchemaChangePolicy`<sup>Optional</sup> <a name="SchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```csharp
public GlueCrawlerSchemaChangePolicy SchemaChangePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

The policy that specifies update and delete behaviors for the crawler.

The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `TablePrefix`<sup>Optional</sup> <a name="TablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```csharp
public string TablePrefix { get; set; }
```

- *Type:* string

The prefix added to the names of tables that are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

The tags to use with this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#tags GlueCrawler#tags}

---

### GlueCrawlerLakeFormationConfiguration <a name="GlueCrawlerLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerLakeFormationConfiguration {
    string AccountId = null,
    bool|IResolvable UseLakeFormationCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId">AccountId</a></code> | <code>string</code> | Required for cross account crawls. For same account crawls as the target data, this can be left as null. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials">UseLakeFormationCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Required for cross account crawls. For same account crawls as the target data, this can be left as null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#account_id GlueCrawler#account_id}

---

##### `UseLakeFormationCredentials`<sup>Optional</sup> <a name="UseLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```csharp
public bool|IResolvable UseLakeFormationCredentials { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerRecrawlPolicy {
    string RecrawlBehavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">RecrawlBehavior</a></code> | <code>string</code> | Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |

---

##### `RecrawlBehavior`<sup>Optional</sup> <a name="RecrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```csharp
public string RecrawlBehavior { get; set; }
```

- *Type:* string

Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

A value of CRAWL_EVERYTHING specifies crawling the entire dataset again. A value of CRAWL_NEW_FOLDERS_ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL_EVENT_MODE specifies crawling only the changes identified by Amazon S3 events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}

---

### GlueCrawlerSchedule <a name="GlueCrawlerSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerSchedule {
    string ScheduleExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | A cron expression used to specify the schedule. |

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

A cron expression used to specify the schedule.

For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 * * ? *).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#schedule_expression GlueCrawler#schedule_expression}

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerSchemaChangePolicy {
    string DeleteBehavior = null,
    string UpdateBehavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">DeleteBehavior</a></code> | <code>string</code> | The deletion behavior when the crawler finds a deleted object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">UpdateBehavior</a></code> | <code>string</code> | The update behavior when the crawler finds a changed schema. |

---

##### `DeleteBehavior`<sup>Optional</sup> <a name="DeleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```csharp
public string DeleteBehavior { get; set; }
```

- *Type:* string

The deletion behavior when the crawler finds a deleted object.

A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE_FROM_DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE_IN_DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}

---

##### `UpdateBehavior`<sup>Optional</sup> <a name="UpdateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```csharp
public string UpdateBehavior { get; set; }
```

- *Type:* string

The update behavior when the crawler finds a changed schema.

A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE_IN_DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}

---

### GlueCrawlerTargets <a name="GlueCrawlerTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargets {
    IResolvable|GlueCrawlerTargetsCatalogTargets[] CatalogTargets = null,
    IResolvable|GlueCrawlerTargetsDeltaTargets[] DeltaTargets = null,
    IResolvable|GlueCrawlerTargetsDynamoDbTargets[] DynamoDbTargets = null,
    IResolvable|GlueCrawlerTargetsHudiTargets[] HudiTargets = null,
    IResolvable|GlueCrawlerTargetsIcebergTargets[] IcebergTargets = null,
    IResolvable|GlueCrawlerTargetsJdbcTargets[] JdbcTargets = null,
    IResolvable|GlueCrawlerTargetsMongoDbTargets[] MongoDbTargets = null,
    IResolvable|GlueCrawlerTargetsS3Targets[] S3Targets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.catalogTargets">CatalogTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>[]</code> | Specifies AWS Glue Data Catalog targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.deltaTargets">DeltaTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>[]</code> | Specifies an array of Delta data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.dynamoDbTargets">DynamoDbTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>[]</code> | Specifies Amazon DynamoDB targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.hudiTargets">HudiTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>[]</code> | Specifies Apache Hudi data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.icebergTargets">IcebergTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>[]</code> | Specifies Apache Iceberg data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.jdbcTargets">JdbcTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>[]</code> | Specifies JDBC targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.mongoDbTargets">MongoDbTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>[]</code> | A list of Mongo DB targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.s3Targets">S3Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>[]</code> | Specifies Amazon Simple Storage Service (Amazon S3) targets. |

---

##### `CatalogTargets`<sup>Optional</sup> <a name="CatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.catalogTargets"></a>

```csharp
public IResolvable|GlueCrawlerTargetsCatalogTargets[] CatalogTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>[]

Specifies AWS Glue Data Catalog targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#catalog_targets GlueCrawler#catalog_targets}

---

##### `DeltaTargets`<sup>Optional</sup> <a name="DeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.deltaTargets"></a>

```csharp
public IResolvable|GlueCrawlerTargetsDeltaTargets[] DeltaTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>[]

Specifies an array of Delta data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delta_targets GlueCrawler#delta_targets}

---

##### `DynamoDbTargets`<sup>Optional</sup> <a name="DynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.dynamoDbTargets"></a>

```csharp
public IResolvable|GlueCrawlerTargetsDynamoDbTargets[] DynamoDbTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>[]

Specifies Amazon DynamoDB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#dynamo_db_targets GlueCrawler#dynamo_db_targets}

---

##### `HudiTargets`<sup>Optional</sup> <a name="HudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.hudiTargets"></a>

```csharp
public IResolvable|GlueCrawlerTargetsHudiTargets[] HudiTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>[]

Specifies Apache Hudi data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#hudi_targets GlueCrawler#hudi_targets}

---

##### `IcebergTargets`<sup>Optional</sup> <a name="IcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.icebergTargets"></a>

```csharp
public IResolvable|GlueCrawlerTargetsIcebergTargets[] IcebergTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>[]

Specifies Apache Iceberg data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#iceberg_targets GlueCrawler#iceberg_targets}

---

##### `JdbcTargets`<sup>Optional</sup> <a name="JdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.jdbcTargets"></a>

```csharp
public IResolvable|GlueCrawlerTargetsJdbcTargets[] JdbcTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>[]

Specifies JDBC targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#jdbc_targets GlueCrawler#jdbc_targets}

---

##### `MongoDbTargets`<sup>Optional</sup> <a name="MongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.mongoDbTargets"></a>

```csharp
public IResolvable|GlueCrawlerTargetsMongoDbTargets[] MongoDbTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>[]

A list of Mongo DB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#mongo_db_targets GlueCrawler#mongo_db_targets}

---

##### `S3Targets`<sup>Optional</sup> <a name="S3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.s3Targets"></a>

```csharp
public IResolvable|GlueCrawlerTargetsS3Targets[] S3Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>[]

Specifies Amazon Simple Storage Service (Amazon S3) targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#s3_targets GlueCrawler#s3_targets}

---

### GlueCrawlerTargetsCatalogTargets <a name="GlueCrawlerTargetsCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsCatalogTargets {
    string ConnectionName = null,
    string DatabaseName = null,
    string DlqEventQueueArn = null,
    string EventQueueArn = null,
    string[] Tables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.connectionName">ConnectionName</a></code> | <code>string</code> | The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.databaseName">DatabaseName</a></code> | <code>string</code> | The name of the database to be synchronized. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>string</code> | A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.eventQueueArn">EventQueueArn</a></code> | <code>string</code> | A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.tables">Tables</a></code> | <code>string[]</code> | A list of the tables to be synchronized. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

The name of the database to be synchronized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `DlqEventQueueArn`<sup>Optional</sup> <a name="DlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.dlqEventQueueArn"></a>

```csharp
public string DlqEventQueueArn { get; set; }
```

- *Type:* string

A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}

---

##### `EventQueueArn`<sup>Optional</sup> <a name="EventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.eventQueueArn"></a>

```csharp
public string EventQueueArn { get; set; }
```

- *Type:* string

A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.tables"></a>

```csharp
public string[] Tables { get; set; }
```

- *Type:* string[]

A list of the tables to be synchronized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#tables GlueCrawler#tables}

---

### GlueCrawlerTargetsDeltaTargets <a name="GlueCrawlerTargetsDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsDeltaTargets {
    string ConnectionName = null,
    bool|IResolvable CreateNativeDeltaTable = null,
    string[] DeltaTables = null,
    bool|IResolvable WriteManifest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.connectionName">ConnectionName</a></code> | <code>string</code> | The name of the connection to use to connect to the Delta table target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.createNativeDeltaTable">CreateNativeDeltaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.deltaTables">DeltaTables</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.writeManifest">WriteManifest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to write the manifest files to the Delta table path. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The name of the connection to use to connect to the Delta table target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `CreateNativeDeltaTable`<sup>Optional</sup> <a name="CreateNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.createNativeDeltaTable"></a>

```csharp
public bool|IResolvable CreateNativeDeltaTable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#create_native_delta_table GlueCrawler#create_native_delta_table}

---

##### `DeltaTables`<sup>Optional</sup> <a name="DeltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.deltaTables"></a>

```csharp
public string[] DeltaTables { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `WriteManifest`<sup>Optional</sup> <a name="WriteManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.writeManifest"></a>

```csharp
public bool|IResolvable WriteManifest { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to write the manifest files to the Delta table path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#write_manifest GlueCrawler#write_manifest}

---

### GlueCrawlerTargetsDynamoDbTargets <a name="GlueCrawlerTargetsDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsDynamoDbTargets {
    string Path = null,
    bool|IResolvable ScanAll = null,
    double ScanRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.path">Path</a></code> | <code>string</code> | The name of the DynamoDB table to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanAll">ScanAll</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to scan all the records, or to sample rows from the table. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanRate">ScanRate</a></code> | <code>double</code> | The percentage of the configured read capacity units to use by the AWS Glue crawler. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The name of the DynamoDB table to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

##### `ScanAll`<sup>Optional</sup> <a name="ScanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanAll"></a>

```csharp
public bool|IResolvable ScanAll { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to scan all the records, or to sample rows from the table.

Scanning all the records can take a long time when the table is not a high throughput table. A value of true means to scan all records, while a value of false means to sample the records. If no value is specified, the value defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}

---

##### `ScanRate`<sup>Optional</sup> <a name="ScanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanRate"></a>

```csharp
public double ScanRate { get; set; }
```

- *Type:* double

The percentage of the configured read capacity units to use by the AWS Glue crawler.

Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.

The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#scan_rate GlueCrawler#scan_rate}

---

### GlueCrawlerTargetsHudiTargets <a name="GlueCrawlerTargetsHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsHudiTargets {
    string ConnectionName = null,
    string[] Exclusions = null,
    double MaximumTraversalDepth = null,
    string[] Paths = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.connectionName">ConnectionName</a></code> | <code>string</code> | The name of the connection to use to connect to the Hudi target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.exclusions">Exclusions</a></code> | <code>string[]</code> | A list of global patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.maximumTraversalDepth">MaximumTraversalDepth</a></code> | <code>double</code> | The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.paths">Paths</a></code> | <code>string[]</code> | One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix . |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The name of the connection to use to connect to the Hudi target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

A list of global patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `MaximumTraversalDepth`<sup>Optional</sup> <a name="MaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.maximumTraversalDepth"></a>

```csharp
public double MaximumTraversalDepth { get; set; }
```

- *Type:* double

The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path.

Used to limit the crawler run time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#paths GlueCrawler#paths}

---

### GlueCrawlerTargetsIcebergTargets <a name="GlueCrawlerTargetsIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsIcebergTargets {
    string ConnectionName = null,
    string[] Exclusions = null,
    double MaximumTraversalDepth = null,
    string[] Paths = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.connectionName">ConnectionName</a></code> | <code>string</code> | The name of the connection to use to connect to the Iceberg target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.exclusions">Exclusions</a></code> | <code>string[]</code> | A list of global patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.maximumTraversalDepth">MaximumTraversalDepth</a></code> | <code>double</code> | The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.paths">Paths</a></code> | <code>string[]</code> | One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix . |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The name of the connection to use to connect to the Iceberg target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

A list of global patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `MaximumTraversalDepth`<sup>Optional</sup> <a name="MaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.maximumTraversalDepth"></a>

```csharp
public double MaximumTraversalDepth { get; set; }
```

- *Type:* double

The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path.

Used to limit the crawler run time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#paths GlueCrawler#paths}

---

### GlueCrawlerTargetsJdbcTargets <a name="GlueCrawlerTargetsJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsJdbcTargets {
    string ConnectionName = null,
    string[] EnableAdditionalMetadata = null,
    string[] Exclusions = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.connectionName">ConnectionName</a></code> | <code>string</code> | The name of the connection to use to connect to the JDBC target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.enableAdditionalMetadata">EnableAdditionalMetadata</a></code> | <code>string[]</code> | Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.exclusions">Exclusions</a></code> | <code>string[]</code> | A list of glob patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.path">Path</a></code> | <code>string</code> | The path of the JDBC target. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The name of the connection to use to connect to the JDBC target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `EnableAdditionalMetadata`<sup>Optional</sup> <a name="EnableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.enableAdditionalMetadata"></a>

```csharp
public string[] EnableAdditionalMetadata { get; set; }
```

- *Type:* string[]

Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses.

RAWTYPES provides the native-level datatype. COMMENTS provides comments associated with a column or table in the database.

If you do not need additional metadata, keep the field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

A list of glob patterns used to exclude from the crawl.

For more information, see Catalog Tables with a Crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path of the JDBC target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

### GlueCrawlerTargetsMongoDbTargets <a name="GlueCrawlerTargetsMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsMongoDbTargets {
    string ConnectionName = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.connectionName">ConnectionName</a></code> | <code>string</code> | The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.path">Path</a></code> | <code>string</code> | The path of the Amazon DocumentDB or MongoDB target (database/collection). |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path of the Amazon DocumentDB or MongoDB target (database/collection).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

### GlueCrawlerTargetsS3Targets <a name="GlueCrawlerTargetsS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsS3Targets {
    string ConnectionName = null,
    string DlqEventQueueArn = null,
    string EventQueueArn = null,
    string[] Exclusions = null,
    string Path = null,
    double SampleSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.connectionName">ConnectionName</a></code> | <code>string</code> | The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC). |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>string</code> | A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.eventQueueArn">EventQueueArn</a></code> | <code>string</code> | A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.exclusions">Exclusions</a></code> | <code>string[]</code> | A list of glob patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.path">Path</a></code> | <code>string</code> | The path to the Amazon S3 target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.sampleSize">SampleSize</a></code> | <code>double</code> | Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `DlqEventQueueArn`<sup>Optional</sup> <a name="DlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.dlqEventQueueArn"></a>

```csharp
public string DlqEventQueueArn { get; set; }
```

- *Type:* string

A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}

---

##### `EventQueueArn`<sup>Optional</sup> <a name="EventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.eventQueueArn"></a>

```csharp
public string EventQueueArn { get; set; }
```

- *Type:* string

A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

A list of glob patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to the Amazon S3 target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.sampleSize"></a>

```csharp
public double SampleSize { get; set; }
```

- *Type:* double

Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset.

If not set, all the files are crawled. A valid value is an integer between 1 and 249.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_crawler#sample_size GlueCrawler#sample_size}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerLakeFormationConfigurationOutputReference <a name="GlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerLakeFormationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials">ResetUseLakeFormationCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetUseLakeFormationCredentials` <a name="ResetUseLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials"></a>

```csharp
private void ResetUseLakeFormationCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput">UseLakeFormationCredentialsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">UseLakeFormationCredentials</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `UseLakeFormationCredentialsInput`<sup>Optional</sup> <a name="UseLakeFormationCredentialsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput"></a>

```csharp
public bool|IResolvable UseLakeFormationCredentialsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `UseLakeFormationCredentials`<sup>Required</sup> <a name="UseLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```csharp
public bool|IResolvable UseLakeFormationCredentials { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerLakeFormationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerRecrawlPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior">ResetRecrawlBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecrawlBehavior` <a name="ResetRecrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```csharp
private void ResetRecrawlBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">RecrawlBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">RecrawlBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecrawlBehaviorInput`<sup>Optional</sup> <a name="RecrawlBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```csharp
public string RecrawlBehaviorInput { get; }
```

- *Type:* string

---

##### `RecrawlBehavior`<sup>Required</sup> <a name="RecrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```csharp
public string RecrawlBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerRecrawlPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---


### GlueCrawlerScheduleOutputReference <a name="GlueCrawlerScheduleOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerSchemaChangePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior">ResetDeleteBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior">ResetUpdateBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteBehavior` <a name="ResetDeleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```csharp
private void ResetDeleteBehavior()
```

##### `ResetUpdateBehavior` <a name="ResetUpdateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```csharp
private void ResetUpdateBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">DeleteBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">UpdateBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">DeleteBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">UpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteBehaviorInput`<sup>Optional</sup> <a name="DeleteBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```csharp
public string DeleteBehaviorInput { get; }
```

- *Type:* string

---

##### `UpdateBehaviorInput`<sup>Optional</sup> <a name="UpdateBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```csharp
public string UpdateBehaviorInput { get; }
```

- *Type:* string

---

##### `DeleteBehavior`<sup>Required</sup> <a name="DeleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```csharp
public string DeleteBehavior { get; }
```

- *Type:* string

---

##### `UpdateBehavior`<sup>Required</sup> <a name="UpdateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```csharp
public string UpdateBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerSchemaChangePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---


### GlueCrawlerTargetsCatalogTargetsList <a name="GlueCrawlerTargetsCatalogTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsCatalogTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get"></a>

```csharp
private GlueCrawlerTargetsCatalogTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsCatalogTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>[]

---


### GlueCrawlerTargetsCatalogTargetsOutputReference <a name="GlueCrawlerTargetsCatalogTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsCatalogTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDlqEventQueueArn">ResetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetEventQueueArn">ResetEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetTables">ResetTables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDlqEventQueueArn` <a name="ResetDlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDlqEventQueueArn"></a>

```csharp
private void ResetDlqEventQueueArn()
```

##### `ResetEventQueueArn` <a name="ResetEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetEventQueueArn"></a>

```csharp
private void ResetEventQueueArn()
```

##### `ResetTables` <a name="ResetTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetTables"></a>

```csharp
private void ResetTables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArnInput">DlqEventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArnInput">EventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tablesInput">TablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn">EventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tables">Tables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DlqEventQueueArnInput`<sup>Optional</sup> <a name="DlqEventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArnInput"></a>

```csharp
public string DlqEventQueueArnInput { get; }
```

- *Type:* string

---

##### `EventQueueArnInput`<sup>Optional</sup> <a name="EventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArnInput"></a>

```csharp
public string EventQueueArnInput { get; }
```

- *Type:* string

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tablesInput"></a>

```csharp
public string[] TablesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DlqEventQueueArn`<sup>Required</sup> <a name="DlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn"></a>

```csharp
public string DlqEventQueueArn { get; }
```

- *Type:* string

---

##### `EventQueueArn`<sup>Required</sup> <a name="EventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn"></a>

```csharp
public string EventQueueArn { get; }
```

- *Type:* string

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tables"></a>

```csharp
public string[] Tables { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsCatalogTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>

---


### GlueCrawlerTargetsDeltaTargetsList <a name="GlueCrawlerTargetsDeltaTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsDeltaTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get"></a>

```csharp
private GlueCrawlerTargetsDeltaTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsDeltaTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>[]

---


### GlueCrawlerTargetsDeltaTargetsOutputReference <a name="GlueCrawlerTargetsDeltaTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsDeltaTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetCreateNativeDeltaTable">ResetCreateNativeDeltaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetDeltaTables">ResetDeltaTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetWriteManifest">ResetWriteManifest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetCreateNativeDeltaTable` <a name="ResetCreateNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetCreateNativeDeltaTable"></a>

```csharp
private void ResetCreateNativeDeltaTable()
```

##### `ResetDeltaTables` <a name="ResetDeltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetDeltaTables"></a>

```csharp
private void ResetDeltaTables()
```

##### `ResetWriteManifest` <a name="ResetWriteManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetWriteManifest"></a>

```csharp
private void ResetWriteManifest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTableInput">CreateNativeDeltaTableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTablesInput">DeltaTablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifestInput">WriteManifestInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable">CreateNativeDeltaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables">DeltaTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest">WriteManifest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `CreateNativeDeltaTableInput`<sup>Optional</sup> <a name="CreateNativeDeltaTableInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTableInput"></a>

```csharp
public bool|IResolvable CreateNativeDeltaTableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeltaTablesInput`<sup>Optional</sup> <a name="DeltaTablesInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTablesInput"></a>

```csharp
public string[] DeltaTablesInput { get; }
```

- *Type:* string[]

---

##### `WriteManifestInput`<sup>Optional</sup> <a name="WriteManifestInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifestInput"></a>

```csharp
public bool|IResolvable WriteManifestInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `CreateNativeDeltaTable`<sup>Required</sup> <a name="CreateNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable"></a>

```csharp
public bool|IResolvable CreateNativeDeltaTable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeltaTables`<sup>Required</sup> <a name="DeltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables"></a>

```csharp
public string[] DeltaTables { get; }
```

- *Type:* string[]

---

##### `WriteManifest`<sup>Required</sup> <a name="WriteManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest"></a>

```csharp
public bool|IResolvable WriteManifest { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsDeltaTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>

---


### GlueCrawlerTargetsDynamoDbTargetsList <a name="GlueCrawlerTargetsDynamoDbTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsDynamoDbTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get"></a>

```csharp
private GlueCrawlerTargetsDynamoDbTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsDynamoDbTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>[]

---


### GlueCrawlerTargetsDynamoDbTargetsOutputReference <a name="GlueCrawlerTargetsDynamoDbTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsDynamoDbTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanAll">ResetScanAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanRate">ResetScanRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetScanAll` <a name="ResetScanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanAll"></a>

```csharp
private void ResetScanAll()
```

##### `ResetScanRate` <a name="ResetScanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanRate"></a>

```csharp
private void ResetScanRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAllInput">ScanAllInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRateInput">ScanRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll">ScanAll</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate">ScanRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ScanAllInput`<sup>Optional</sup> <a name="ScanAllInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAllInput"></a>

```csharp
public bool|IResolvable ScanAllInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScanRateInput`<sup>Optional</sup> <a name="ScanRateInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRateInput"></a>

```csharp
public double ScanRateInput { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ScanAll`<sup>Required</sup> <a name="ScanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll"></a>

```csharp
public bool|IResolvable ScanAll { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScanRate`<sup>Required</sup> <a name="ScanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate"></a>

```csharp
public double ScanRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsDynamoDbTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>

---


### GlueCrawlerTargetsHudiTargetsList <a name="GlueCrawlerTargetsHudiTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsHudiTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get"></a>

```csharp
private GlueCrawlerTargetsHudiTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsHudiTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>[]

---


### GlueCrawlerTargetsHudiTargetsOutputReference <a name="GlueCrawlerTargetsHudiTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsHudiTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetMaximumTraversalDepth">ResetMaximumTraversalDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetMaximumTraversalDepth` <a name="ResetMaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetMaximumTraversalDepth"></a>

```csharp
private void ResetMaximumTraversalDepth()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetPaths"></a>

```csharp
private void ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepthInput">MaximumTraversalDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth">MaximumTraversalDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `MaximumTraversalDepthInput`<sup>Optional</sup> <a name="MaximumTraversalDepthInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepthInput"></a>

```csharp
public double MaximumTraversalDepthInput { get; }
```

- *Type:* double

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `MaximumTraversalDepth`<sup>Required</sup> <a name="MaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth"></a>

```csharp
public double MaximumTraversalDepth { get; }
```

- *Type:* double

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsHudiTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>

---


### GlueCrawlerTargetsIcebergTargetsList <a name="GlueCrawlerTargetsIcebergTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsIcebergTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get"></a>

```csharp
private GlueCrawlerTargetsIcebergTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsIcebergTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>[]

---


### GlueCrawlerTargetsIcebergTargetsOutputReference <a name="GlueCrawlerTargetsIcebergTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsIcebergTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetMaximumTraversalDepth">ResetMaximumTraversalDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetMaximumTraversalDepth` <a name="ResetMaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetMaximumTraversalDepth"></a>

```csharp
private void ResetMaximumTraversalDepth()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetPaths"></a>

```csharp
private void ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepthInput">MaximumTraversalDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth">MaximumTraversalDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `MaximumTraversalDepthInput`<sup>Optional</sup> <a name="MaximumTraversalDepthInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepthInput"></a>

```csharp
public double MaximumTraversalDepthInput { get; }
```

- *Type:* double

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `MaximumTraversalDepth`<sup>Required</sup> <a name="MaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth"></a>

```csharp
public double MaximumTraversalDepth { get; }
```

- *Type:* double

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsIcebergTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>

---


### GlueCrawlerTargetsJdbcTargetsList <a name="GlueCrawlerTargetsJdbcTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsJdbcTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get"></a>

```csharp
private GlueCrawlerTargetsJdbcTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsJdbcTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>[]

---


### GlueCrawlerTargetsJdbcTargetsOutputReference <a name="GlueCrawlerTargetsJdbcTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsJdbcTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetEnableAdditionalMetadata">ResetEnableAdditionalMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetEnableAdditionalMetadata` <a name="ResetEnableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetEnableAdditionalMetadata"></a>

```csharp
private void ResetEnableAdditionalMetadata()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadataInput">EnableAdditionalMetadataInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata">EnableAdditionalMetadata</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `EnableAdditionalMetadataInput`<sup>Optional</sup> <a name="EnableAdditionalMetadataInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadataInput"></a>

```csharp
public string[] EnableAdditionalMetadataInput { get; }
```

- *Type:* string[]

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `EnableAdditionalMetadata`<sup>Required</sup> <a name="EnableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata"></a>

```csharp
public string[] EnableAdditionalMetadata { get; }
```

- *Type:* string[]

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsJdbcTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>

---


### GlueCrawlerTargetsMongoDbTargetsList <a name="GlueCrawlerTargetsMongoDbTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsMongoDbTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get"></a>

```csharp
private GlueCrawlerTargetsMongoDbTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsMongoDbTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>[]

---


### GlueCrawlerTargetsMongoDbTargetsOutputReference <a name="GlueCrawlerTargetsMongoDbTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsMongoDbTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsMongoDbTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>

---


### GlueCrawlerTargetsOutputReference <a name="GlueCrawlerTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets">PutCatalogTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets">PutDeltaTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets">PutDynamoDbTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets">PutHudiTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets">PutIcebergTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets">PutJdbcTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets">PutMongoDbTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets">PutS3Targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetCatalogTargets">ResetCatalogTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDeltaTargets">ResetDeltaTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDynamoDbTargets">ResetDynamoDbTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetHudiTargets">ResetHudiTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetIcebergTargets">ResetIcebergTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetJdbcTargets">ResetJdbcTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetMongoDbTargets">ResetMongoDbTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetS3Targets">ResetS3Targets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalogTargets` <a name="PutCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets"></a>

```csharp
private void PutCatalogTargets(IResolvable|GlueCrawlerTargetsCatalogTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>[]

---

##### `PutDeltaTargets` <a name="PutDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets"></a>

```csharp
private void PutDeltaTargets(IResolvable|GlueCrawlerTargetsDeltaTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>[]

---

##### `PutDynamoDbTargets` <a name="PutDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets"></a>

```csharp
private void PutDynamoDbTargets(IResolvable|GlueCrawlerTargetsDynamoDbTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>[]

---

##### `PutHudiTargets` <a name="PutHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets"></a>

```csharp
private void PutHudiTargets(IResolvable|GlueCrawlerTargetsHudiTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>[]

---

##### `PutIcebergTargets` <a name="PutIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets"></a>

```csharp
private void PutIcebergTargets(IResolvable|GlueCrawlerTargetsIcebergTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>[]

---

##### `PutJdbcTargets` <a name="PutJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets"></a>

```csharp
private void PutJdbcTargets(IResolvable|GlueCrawlerTargetsJdbcTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>[]

---

##### `PutMongoDbTargets` <a name="PutMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets"></a>

```csharp
private void PutMongoDbTargets(IResolvable|GlueCrawlerTargetsMongoDbTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>[]

---

##### `PutS3Targets` <a name="PutS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets"></a>

```csharp
private void PutS3Targets(IResolvable|GlueCrawlerTargetsS3Targets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>[]

---

##### `ResetCatalogTargets` <a name="ResetCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetCatalogTargets"></a>

```csharp
private void ResetCatalogTargets()
```

##### `ResetDeltaTargets` <a name="ResetDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDeltaTargets"></a>

```csharp
private void ResetDeltaTargets()
```

##### `ResetDynamoDbTargets` <a name="ResetDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDynamoDbTargets"></a>

```csharp
private void ResetDynamoDbTargets()
```

##### `ResetHudiTargets` <a name="ResetHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetHudiTargets"></a>

```csharp
private void ResetHudiTargets()
```

##### `ResetIcebergTargets` <a name="ResetIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetIcebergTargets"></a>

```csharp
private void ResetIcebergTargets()
```

##### `ResetJdbcTargets` <a name="ResetJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetJdbcTargets"></a>

```csharp
private void ResetJdbcTargets()
```

##### `ResetMongoDbTargets` <a name="ResetMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetMongoDbTargets"></a>

```csharp
private void ResetMongoDbTargets()
```

##### `ResetS3Targets` <a name="ResetS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetS3Targets"></a>

```csharp
private void ResetS3Targets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargets">CatalogTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList">GlueCrawlerTargetsCatalogTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargets">DeltaTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList">GlueCrawlerTargetsDeltaTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargets">DynamoDbTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList">GlueCrawlerTargetsDynamoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargets">HudiTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList">GlueCrawlerTargetsHudiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargets">IcebergTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList">GlueCrawlerTargetsIcebergTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargets">JdbcTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList">GlueCrawlerTargetsJdbcTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargets">MongoDbTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList">GlueCrawlerTargetsMongoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3Targets">S3Targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList">GlueCrawlerTargetsS3TargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargetsInput">CatalogTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargetsInput">DeltaTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargetsInput">DynamoDbTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargetsInput">HudiTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargetsInput">IcebergTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargetsInput">JdbcTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargetsInput">MongoDbTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3TargetsInput">S3TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogTargets`<sup>Required</sup> <a name="CatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargets"></a>

```csharp
public GlueCrawlerTargetsCatalogTargetsList CatalogTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList">GlueCrawlerTargetsCatalogTargetsList</a>

---

##### `DeltaTargets`<sup>Required</sup> <a name="DeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargets"></a>

```csharp
public GlueCrawlerTargetsDeltaTargetsList DeltaTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList">GlueCrawlerTargetsDeltaTargetsList</a>

---

##### `DynamoDbTargets`<sup>Required</sup> <a name="DynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargets"></a>

```csharp
public GlueCrawlerTargetsDynamoDbTargetsList DynamoDbTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList">GlueCrawlerTargetsDynamoDbTargetsList</a>

---

##### `HudiTargets`<sup>Required</sup> <a name="HudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargets"></a>

```csharp
public GlueCrawlerTargetsHudiTargetsList HudiTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList">GlueCrawlerTargetsHudiTargetsList</a>

---

##### `IcebergTargets`<sup>Required</sup> <a name="IcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargets"></a>

```csharp
public GlueCrawlerTargetsIcebergTargetsList IcebergTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList">GlueCrawlerTargetsIcebergTargetsList</a>

---

##### `JdbcTargets`<sup>Required</sup> <a name="JdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargets"></a>

```csharp
public GlueCrawlerTargetsJdbcTargetsList JdbcTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList">GlueCrawlerTargetsJdbcTargetsList</a>

---

##### `MongoDbTargets`<sup>Required</sup> <a name="MongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargets"></a>

```csharp
public GlueCrawlerTargetsMongoDbTargetsList MongoDbTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList">GlueCrawlerTargetsMongoDbTargetsList</a>

---

##### `S3Targets`<sup>Required</sup> <a name="S3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3Targets"></a>

```csharp
public GlueCrawlerTargetsS3TargetsList S3Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList">GlueCrawlerTargetsS3TargetsList</a>

---

##### `CatalogTargetsInput`<sup>Optional</sup> <a name="CatalogTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargetsCatalogTargets[] CatalogTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets">GlueCrawlerTargetsCatalogTargets</a>[]

---

##### `DeltaTargetsInput`<sup>Optional</sup> <a name="DeltaTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargetsDeltaTargets[] DeltaTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets">GlueCrawlerTargetsDeltaTargets</a>[]

---

##### `DynamoDbTargetsInput`<sup>Optional</sup> <a name="DynamoDbTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargetsDynamoDbTargets[] DynamoDbTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets">GlueCrawlerTargetsDynamoDbTargets</a>[]

---

##### `HudiTargetsInput`<sup>Optional</sup> <a name="HudiTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargetsHudiTargets[] HudiTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets">GlueCrawlerTargetsHudiTargets</a>[]

---

##### `IcebergTargetsInput`<sup>Optional</sup> <a name="IcebergTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargetsIcebergTargets[] IcebergTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets">GlueCrawlerTargetsIcebergTargets</a>[]

---

##### `JdbcTargetsInput`<sup>Optional</sup> <a name="JdbcTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargetsJdbcTargets[] JdbcTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets">GlueCrawlerTargetsJdbcTargets</a>[]

---

##### `MongoDbTargetsInput`<sup>Optional</sup> <a name="MongoDbTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargetsMongoDbTargets[] MongoDbTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets">GlueCrawlerTargetsMongoDbTargets</a>[]

---

##### `S3TargetsInput`<sup>Optional</sup> <a name="S3TargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3TargetsInput"></a>

```csharp
public IResolvable|GlueCrawlerTargetsS3Targets[] S3TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---


### GlueCrawlerTargetsS3TargetsList <a name="GlueCrawlerTargetsS3TargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsS3TargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get"></a>

```csharp
private GlueCrawlerTargetsS3TargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsS3Targets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>[]

---


### GlueCrawlerTargetsS3TargetsOutputReference <a name="GlueCrawlerTargetsS3TargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueCrawlerTargetsS3TargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetDlqEventQueueArn">ResetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetEventQueueArn">ResetEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetSampleSize">ResetSampleSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetDlqEventQueueArn` <a name="ResetDlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetDlqEventQueueArn"></a>

```csharp
private void ResetDlqEventQueueArn()
```

##### `ResetEventQueueArn` <a name="ResetEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetEventQueueArn"></a>

```csharp
private void ResetEventQueueArn()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetSampleSize"></a>

```csharp
private void ResetSampleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArnInput">DlqEventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArnInput">EventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn">EventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize">SampleSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `DlqEventQueueArnInput`<sup>Optional</sup> <a name="DlqEventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArnInput"></a>

```csharp
public string DlqEventQueueArnInput { get; }
```

- *Type:* string

---

##### `EventQueueArnInput`<sup>Optional</sup> <a name="EventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArnInput"></a>

```csharp
public string EventQueueArnInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSizeInput"></a>

```csharp
public double SampleSizeInput { get; }
```

- *Type:* double

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DlqEventQueueArn`<sup>Required</sup> <a name="DlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn"></a>

```csharp
public string DlqEventQueueArn { get; }
```

- *Type:* string

---

##### `EventQueueArn`<sup>Required</sup> <a name="EventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn"></a>

```csharp
public string EventQueueArn { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize"></a>

```csharp
public double SampleSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueCrawlerTargetsS3Targets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets">GlueCrawlerTargetsS3Targets</a>

---



