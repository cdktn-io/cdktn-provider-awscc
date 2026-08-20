# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktn/provider-awscc.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler awscc_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawler(scope Construct, id *string, config GlueCrawlerConfig) GlueCrawler
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLakeFormationConfiguration` <a name="PutLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration"></a>

```go
func PutLakeFormationConfiguration(value GlueCrawlerLakeFormationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `PutRecrawlPolicy` <a name="PutRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```go
func PutRecrawlPolicy(value GlueCrawlerRecrawlPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule"></a>

```go
func PutSchedule(value GlueCrawlerSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

---

##### `PutSchemaChangePolicy` <a name="PutSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```go
func PutSchemaChangePolicy(value GlueCrawlerSchemaChangePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets"></a>

```go
func PutTargets(value GlueCrawlerTargets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

---

##### `ResetClassifiers` <a name="ResetClassifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetClassifiers"></a>

```go
func ResetClassifiers()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetCrawlerSecurityConfiguration` <a name="ResetCrawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetCrawlerSecurityConfiguration"></a>

```go
func ResetCrawlerSecurityConfiguration()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLakeFormationConfiguration` <a name="ResetLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetLakeFormationConfiguration"></a>

```go
func ResetLakeFormationConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetName"></a>

```go
func ResetName()
```

##### `ResetRecrawlPolicy` <a name="ResetRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```go
func ResetRecrawlPolicy()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetSchemaChangePolicy` <a name="ResetSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```go
func ResetSchemaChangePolicy()
```

##### `ResetTablePrefix` <a name="ResetTablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```go
func ResetTablePrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.resetTags"></a>

```go
func ResetTags()
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

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.GlueCrawler_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.GlueCrawler_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.GlueCrawler_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.GlueCrawler_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueCrawler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueCrawler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueCrawler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueCrawler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicy">RecrawlPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference">GlueCrawlerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicy">SchemaChangePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference">GlueCrawlerTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiersInput">ClassifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configurationInput">ConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfigurationInput">CrawlerSecurityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput">LakeFormationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicyInput">RecrawlPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">SchemaChangePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefixInput">TablePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiers">Classifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfiguration">CrawlerSecurityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LakeFormationConfiguration`<sup>Required</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfiguration"></a>

```go
func LakeFormationConfiguration() GlueCrawlerLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `RecrawlPolicy`<sup>Required</sup> <a name="RecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```go
func RecrawlPolicy() GlueCrawlerRecrawlPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schedule"></a>

```go
func Schedule() GlueCrawlerScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference">GlueCrawlerScheduleOutputReference</a>

---

##### `SchemaChangePolicy`<sup>Required</sup> <a name="SchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```go
func SchemaChangePolicy() GlueCrawlerSchemaChangePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targets"></a>

```go
func Targets() GlueCrawlerTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference">GlueCrawlerTargetsOutputReference</a>

---

##### `ClassifiersInput`<sup>Optional</sup> <a name="ClassifiersInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```go
func ClassifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configurationInput"></a>

```go
func ConfigurationInput() *string
```

- *Type:* *string

---

##### `CrawlerSecurityConfigurationInput`<sup>Optional</sup> <a name="CrawlerSecurityConfigurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfigurationInput"></a>

```go
func CrawlerSecurityConfigurationInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LakeFormationConfigurationInput`<sup>Optional</sup> <a name="LakeFormationConfigurationInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput"></a>

```go
func LakeFormationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecrawlPolicyInput`<sup>Optional</sup> <a name="RecrawlPolicyInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```go
func RecrawlPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaChangePolicyInput`<sup>Optional</sup> <a name="SchemaChangePolicyInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```go
func SchemaChangePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TablePrefixInput`<sup>Optional</sup> <a name="TablePrefixInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```go
func TablePrefixInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `Classifiers`<sup>Required</sup> <a name="Classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.classifiers"></a>

```go
func Classifiers() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `CrawlerSecurityConfiguration`<sup>Required</sup> <a name="CrawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.crawlerSecurityConfiguration"></a>

```go
func CrawlerSecurityConfiguration() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```go
func TablePrefix() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Role: *string,
	Targets: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCrawler.GlueCrawlerTargets,
	Classifiers: *[]*string,
	Configuration: *string,
	CrawlerSecurityConfiguration: *string,
	DatabaseName: *string,
	Description: *string,
	LakeFormationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration,
	Name: *string,
	RecrawlPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCrawler.GlueCrawlerRecrawlPolicy,
	Schedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCrawler.GlueCrawlerSchedule,
	SchemaChangePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueCrawler.GlueCrawlerSchemaChangePolicy,
	TablePrefix: *string,
	Tags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.role">Role</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a></code> | Specifies data stores to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.classifiers">Classifiers</a></code> | <code>*[]*string</code> | A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.configuration">Configuration</a></code> | <code>*string</code> | Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.crawlerSecurityConfiguration">CrawlerSecurityConfiguration</a></code> | <code>*string</code> | The name of the SecurityConfiguration structure to be used by this crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the database in which the crawler's output is stored. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.description">Description</a></code> | <code>*string</code> | A description of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | Specifies AWS Lake Formation configuration settings for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">RecrawlPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a></code> | A scheduling object using a cron statement to schedule an event. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">SchemaChangePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | The policy that specifies update and delete behaviors for the crawler. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tablePrefix">TablePrefix</a></code> | <code>*string</code> | The prefix added to the names of tables that are created. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tags">Tags</a></code> | <code>*string</code> | The tags to use with this crawler. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#role GlueCrawler#role}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.targets"></a>

```go
Targets GlueCrawlerTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets">GlueCrawlerTargets</a>

Specifies data stores to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#targets GlueCrawler#targets}

---

##### `Classifiers`<sup>Optional</sup> <a name="Classifiers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```go
Classifiers *[]*string
```

- *Type:* *[]*string

A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```go
Configuration *string
```

- *Type:* *string

Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#configuration GlueCrawler#configuration}

---

##### `CrawlerSecurityConfiguration`<sup>Optional</sup> <a name="CrawlerSecurityConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.crawlerSecurityConfiguration"></a>

```go
CrawlerSecurityConfiguration *string
```

- *Type:* *string

The name of the SecurityConfiguration structure to be used by this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#crawler_security_configuration GlueCrawler#crawler_security_configuration}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the database in which the crawler's output is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#description GlueCrawler#description}

---

##### `LakeFormationConfiguration`<sup>Optional</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration"></a>

```go
LakeFormationConfiguration GlueCrawlerLakeFormationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

Specifies AWS Lake Formation configuration settings for the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#name GlueCrawler#name}

---

##### `RecrawlPolicy`<sup>Optional</sup> <a name="RecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```go
RecrawlPolicy GlueCrawlerRecrawlPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

For more information, see Incremental Crawls in AWS Glue in the developer guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```go
Schedule GlueCrawlerSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule">GlueCrawlerSchedule</a>

A scheduling object using a cron statement to schedule an event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#schedule GlueCrawler#schedule}

---

##### `SchemaChangePolicy`<sup>Optional</sup> <a name="SchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```go
SchemaChangePolicy GlueCrawlerSchemaChangePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

The policy that specifies update and delete behaviors for the crawler.

The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The SchemaChangePolicy does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the SchemaChangePolicy on a crawler. The SchemaChangePolicy consists of two components, UpdateBehavior and DeleteBehavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `TablePrefix`<sup>Optional</sup> <a name="TablePrefix" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```go
TablePrefix *string
```

- *Type:* *string

The prefix added to the names of tables that are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

The tags to use with this crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#tags GlueCrawler#tags}

---

### GlueCrawlerLakeFormationConfiguration <a name="GlueCrawlerLakeFormationConfiguration" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerLakeFormationConfiguration {
	AccountId: *string,
	UseLakeFormationCredentials: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId">AccountId</a></code> | <code>*string</code> | Required for cross account crawls. For same account crawls as the target data, this can be left as null. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials">UseLakeFormationCredentials</a></code> | <code>interface{}</code> | Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Required for cross account crawls. For same account crawls as the target data, this can be left as null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#account_id GlueCrawler#account_id}

---

##### `UseLakeFormationCredentials`<sup>Optional</sup> <a name="UseLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```go
UseLakeFormationCredentials interface{}
```

- *Type:* interface{}

Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerRecrawlPolicy {
	RecrawlBehavior: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">RecrawlBehavior</a></code> | <code>*string</code> | Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. |

---

##### `RecrawlBehavior`<sup>Optional</sup> <a name="RecrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```go
RecrawlBehavior *string
```

- *Type:* *string

Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.

A value of CRAWL_EVERYTHING specifies crawling the entire dataset again. A value of CRAWL_NEW_FOLDERS_ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL_EVENT_MODE specifies crawling only the changes identified by Amazon S3 events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}

---

### GlueCrawlerSchedule <a name="GlueCrawlerSchedule" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerSchedule {
	ScheduleExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | A cron expression used to specify the schedule. |

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchedule.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

A cron expression used to specify the schedule.

For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 * * ? *).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#schedule_expression GlueCrawler#schedule_expression}

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerSchemaChangePolicy {
	DeleteBehavior: *string,
	UpdateBehavior: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">DeleteBehavior</a></code> | <code>*string</code> | The deletion behavior when the crawler finds a deleted object. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">UpdateBehavior</a></code> | <code>*string</code> | The update behavior when the crawler finds a changed schema. |

---

##### `DeleteBehavior`<sup>Optional</sup> <a name="DeleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```go
DeleteBehavior *string
```

- *Type:* *string

The deletion behavior when the crawler finds a deleted object.

A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE_FROM_DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE_IN_DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}

---

##### `UpdateBehavior`<sup>Optional</sup> <a name="UpdateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```go
UpdateBehavior *string
```

- *Type:* *string

The update behavior when the crawler finds a changed schema.

A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE_IN_DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}

---

### GlueCrawlerTargets <a name="GlueCrawlerTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargets {
	CatalogTargets: interface{},
	DeltaTargets: interface{},
	DynamoDbTargets: interface{},
	HudiTargets: interface{},
	IcebergTargets: interface{},
	JdbcTargets: interface{},
	MongoDbTargets: interface{},
	S3Targets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.catalogTargets">CatalogTargets</a></code> | <code>interface{}</code> | Specifies AWS Glue Data Catalog targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.deltaTargets">DeltaTargets</a></code> | <code>interface{}</code> | Specifies an array of Delta data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.dynamoDbTargets">DynamoDbTargets</a></code> | <code>interface{}</code> | Specifies Amazon DynamoDB targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.hudiTargets">HudiTargets</a></code> | <code>interface{}</code> | Specifies Apache Hudi data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.icebergTargets">IcebergTargets</a></code> | <code>interface{}</code> | Specifies Apache Iceberg data store targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.jdbcTargets">JdbcTargets</a></code> | <code>interface{}</code> | Specifies JDBC targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.mongoDbTargets">MongoDbTargets</a></code> | <code>interface{}</code> | A list of Mongo DB targets. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.s3Targets">S3Targets</a></code> | <code>interface{}</code> | Specifies Amazon Simple Storage Service (Amazon S3) targets. |

---

##### `CatalogTargets`<sup>Optional</sup> <a name="CatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.catalogTargets"></a>

```go
CatalogTargets interface{}
```

- *Type:* interface{}

Specifies AWS Glue Data Catalog targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#catalog_targets GlueCrawler#catalog_targets}

---

##### `DeltaTargets`<sup>Optional</sup> <a name="DeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.deltaTargets"></a>

```go
DeltaTargets interface{}
```

- *Type:* interface{}

Specifies an array of Delta data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#delta_targets GlueCrawler#delta_targets}

---

##### `DynamoDbTargets`<sup>Optional</sup> <a name="DynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.dynamoDbTargets"></a>

```go
DynamoDbTargets interface{}
```

- *Type:* interface{}

Specifies Amazon DynamoDB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#dynamo_db_targets GlueCrawler#dynamo_db_targets}

---

##### `HudiTargets`<sup>Optional</sup> <a name="HudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.hudiTargets"></a>

```go
HudiTargets interface{}
```

- *Type:* interface{}

Specifies Apache Hudi data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#hudi_targets GlueCrawler#hudi_targets}

---

##### `IcebergTargets`<sup>Optional</sup> <a name="IcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.icebergTargets"></a>

```go
IcebergTargets interface{}
```

- *Type:* interface{}

Specifies Apache Iceberg data store targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#iceberg_targets GlueCrawler#iceberg_targets}

---

##### `JdbcTargets`<sup>Optional</sup> <a name="JdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.jdbcTargets"></a>

```go
JdbcTargets interface{}
```

- *Type:* interface{}

Specifies JDBC targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#jdbc_targets GlueCrawler#jdbc_targets}

---

##### `MongoDbTargets`<sup>Optional</sup> <a name="MongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.mongoDbTargets"></a>

```go
MongoDbTargets interface{}
```

- *Type:* interface{}

A list of Mongo DB targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#mongo_db_targets GlueCrawler#mongo_db_targets}

---

##### `S3Targets`<sup>Optional</sup> <a name="S3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargets.property.s3Targets"></a>

```go
S3Targets interface{}
```

- *Type:* interface{}

Specifies Amazon Simple Storage Service (Amazon S3) targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#s3_targets GlueCrawler#s3_targets}

---

### GlueCrawlerTargetsCatalogTargets <a name="GlueCrawlerTargetsCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargetsCatalogTargets {
	ConnectionName: *string,
	DatabaseName: *string,
	DlqEventQueueArn: *string,
	EventQueueArn: *string,
	Tables: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the database to be synchronized. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>*string</code> | A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.eventQueueArn">EventQueueArn</a></code> | <code>*string</code> | A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.tables">Tables</a></code> | <code>*[]*string</code> | A list of the tables to be synchronized. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the database to be synchronized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#database_name GlueCrawler#database_name}

---

##### `DlqEventQueueArn`<sup>Optional</sup> <a name="DlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.dlqEventQueueArn"></a>

```go
DlqEventQueueArn *string
```

- *Type:* *string

A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}

---

##### `EventQueueArn`<sup>Optional</sup> <a name="EventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.eventQueueArn"></a>

```go
EventQueueArn *string
```

- *Type:* *string

A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargets.property.tables"></a>

```go
Tables *[]*string
```

- *Type:* *[]*string

A list of the tables to be synchronized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#tables GlueCrawler#tables}

---

### GlueCrawlerTargetsDeltaTargets <a name="GlueCrawlerTargetsDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargetsDeltaTargets {
	ConnectionName: *string,
	CreateNativeDeltaTable: interface{},
	DeltaTables: *[]*string,
	WriteManifest: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection to use to connect to the Delta table target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.createNativeDeltaTable">CreateNativeDeltaTable</a></code> | <code>interface{}</code> | Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.deltaTables">DeltaTables</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.writeManifest">WriteManifest</a></code> | <code>interface{}</code> | Specifies whether to write the manifest files to the Delta table path. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection to use to connect to the Delta table target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `CreateNativeDeltaTable`<sup>Optional</sup> <a name="CreateNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.createNativeDeltaTable"></a>

```go
CreateNativeDeltaTable interface{}
```

- *Type:* interface{}

Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#create_native_delta_table GlueCrawler#create_native_delta_table}

---

##### `DeltaTables`<sup>Optional</sup> <a name="DeltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.deltaTables"></a>

```go
DeltaTables *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `WriteManifest`<sup>Optional</sup> <a name="WriteManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargets.property.writeManifest"></a>

```go
WriteManifest interface{}
```

- *Type:* interface{}

Specifies whether to write the manifest files to the Delta table path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#write_manifest GlueCrawler#write_manifest}

---

### GlueCrawlerTargetsDynamoDbTargets <a name="GlueCrawlerTargetsDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargetsDynamoDbTargets {
	Path: *string,
	ScanAll: interface{},
	ScanRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.path">Path</a></code> | <code>*string</code> | The name of the DynamoDB table to crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanAll">ScanAll</a></code> | <code>interface{}</code> | Indicates whether to scan all the records, or to sample rows from the table. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanRate">ScanRate</a></code> | <code>*f64</code> | The percentage of the configured read capacity units to use by the AWS Glue crawler. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.path"></a>

```go
Path *string
```

- *Type:* *string

The name of the DynamoDB table to crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

##### `ScanAll`<sup>Optional</sup> <a name="ScanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanAll"></a>

```go
ScanAll interface{}
```

- *Type:* interface{}

Indicates whether to scan all the records, or to sample rows from the table.

Scanning all the records can take a long time when the table is not a high throughput table. A value of true means to scan all records, while a value of false means to sample the records. If no value is specified, the value defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}

---

##### `ScanRate`<sup>Optional</sup> <a name="ScanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargets.property.scanRate"></a>

```go
ScanRate *f64
```

- *Type:* *f64

The percentage of the configured read capacity units to use by the AWS Glue crawler.

Read capacity units is a term defined by DynamoDB, and is a numeric value that acts as rate limiter for the number of reads that can be performed on that table per second.

The valid values are null or a value between 0.1 to 1.5. A null value is used when user does not provide a value, and defaults to 0.5 of the configured Read Capacity Unit (for provisioned tables), or 0.25 of the max configured Read Capacity Unit (for tables using on-demand mode).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#scan_rate GlueCrawler#scan_rate}

---

### GlueCrawlerTargetsHudiTargets <a name="GlueCrawlerTargetsHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargetsHudiTargets {
	ConnectionName: *string,
	Exclusions: *[]*string,
	MaximumTraversalDepth: *f64,
	Paths: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection to use to connect to the Hudi target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | A list of global patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.maximumTraversalDepth">MaximumTraversalDepth</a></code> | <code>*f64</code> | The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.paths">Paths</a></code> | <code>*[]*string</code> | One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix . |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection to use to connect to the Hudi target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

A list of global patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `MaximumTraversalDepth`<sup>Optional</sup> <a name="MaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.maximumTraversalDepth"></a>

```go
MaximumTraversalDepth *f64
```

- *Type:* *f64

The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path.

Used to limit the crawler run time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargets.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#paths GlueCrawler#paths}

---

### GlueCrawlerTargetsIcebergTargets <a name="GlueCrawlerTargetsIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargetsIcebergTargets {
	ConnectionName: *string,
	Exclusions: *[]*string,
	MaximumTraversalDepth: *f64,
	Paths: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection to use to connect to the Iceberg target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | A list of global patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.maximumTraversalDepth">MaximumTraversalDepth</a></code> | <code>*f64</code> | The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.paths">Paths</a></code> | <code>*[]*string</code> | One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix . |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection to use to connect to the Iceberg target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

A list of global patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `MaximumTraversalDepth`<sup>Optional</sup> <a name="MaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.maximumTraversalDepth"></a>

```go
MaximumTraversalDepth *f64
```

- *Type:* *f64

The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path.

Used to limit the crawler run time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#maximum_traversal_depth GlueCrawler#maximum_traversal_depth}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargets.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#paths GlueCrawler#paths}

---

### GlueCrawlerTargetsJdbcTargets <a name="GlueCrawlerTargetsJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargetsJdbcTargets {
	ConnectionName: *string,
	EnableAdditionalMetadata: *[]*string,
	Exclusions: *[]*string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection to use to connect to the JDBC target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.enableAdditionalMetadata">EnableAdditionalMetadata</a></code> | <code>*[]*string</code> | Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | A list of glob patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.path">Path</a></code> | <code>*string</code> | The path of the JDBC target. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection to use to connect to the JDBC target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `EnableAdditionalMetadata`<sup>Optional</sup> <a name="EnableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.enableAdditionalMetadata"></a>

```go
EnableAdditionalMetadata *[]*string
```

- *Type:* *[]*string

Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses.

RAWTYPES provides the native-level datatype. COMMENTS provides comments associated with a column or table in the database.

If you do not need additional metadata, keep the field empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

A list of glob patterns used to exclude from the crawl.

For more information, see Catalog Tables with a Crawler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargets.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path of the JDBC target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

### GlueCrawlerTargetsMongoDbTargets <a name="GlueCrawlerTargetsMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargetsMongoDbTargets {
	ConnectionName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.path">Path</a></code> | <code>*string</code> | The path of the Amazon DocumentDB or MongoDB target (database/collection). |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargets.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path of the Amazon DocumentDB or MongoDB target (database/collection).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

### GlueCrawlerTargetsS3Targets <a name="GlueCrawlerTargetsS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

&gluecrawler.GlueCrawlerTargetsS3Targets {
	ConnectionName: *string,
	DlqEventQueueArn: *string,
	EventQueueArn: *string,
	Exclusions: *[]*string,
	Path: *string,
	SampleSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC). |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>*string</code> | A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.eventQueueArn">EventQueueArn</a></code> | <code>*string</code> | A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | A list of glob patterns used to exclude from the crawl. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.path">Path</a></code> | <code>*string</code> | The path to the Amazon S3 target. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}

---

##### `DlqEventQueueArn`<sup>Optional</sup> <a name="DlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.dlqEventQueueArn"></a>

```go
DlqEventQueueArn *string
```

- *Type:* *string

A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}

---

##### `EventQueueArn`<sup>Optional</sup> <a name="EventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.eventQueueArn"></a>

```go
EventQueueArn *string
```

- *Type:* *string

A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

A list of glob patterns used to exclude from the crawl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path to the Amazon S3 target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#path GlueCrawler#path}

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3Targets.property.sampleSize"></a>

```go
SampleSize *f64
```

- *Type:* *f64

Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset.

If not set, all the files are crawled. A valid value is an integer between 1 and 249.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_crawler#sample_size GlueCrawler#sample_size}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerLakeFormationConfigurationOutputReference <a name="GlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerLakeFormationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerLakeFormationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetUseLakeFormationCredentials` <a name="ResetUseLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials"></a>

```go
func ResetUseLakeFormationCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput">UseLakeFormationCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">UseLakeFormationCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `UseLakeFormationCredentialsInput`<sup>Optional</sup> <a name="UseLakeFormationCredentialsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput"></a>

```go
func UseLakeFormationCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `UseLakeFormationCredentials`<sup>Required</sup> <a name="UseLakeFormationCredentials" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```go
func UseLakeFormationCredentials() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerRecrawlPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerRecrawlPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecrawlBehavior` <a name="ResetRecrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```go
func ResetRecrawlBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">RecrawlBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">RecrawlBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecrawlBehaviorInput`<sup>Optional</sup> <a name="RecrawlBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```go
func RecrawlBehaviorInput() *string
```

- *Type:* *string

---

##### `RecrawlBehavior`<sup>Required</sup> <a name="RecrawlBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```go
func RecrawlBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerScheduleOutputReference <a name="GlueCrawlerScheduleOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerSchemaChangePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerSchemaChangePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteBehavior` <a name="ResetDeleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```go
func ResetDeleteBehavior()
```

##### `ResetUpdateBehavior` <a name="ResetUpdateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```go
func ResetUpdateBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">DeleteBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">UpdateBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">DeleteBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">UpdateBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteBehaviorInput`<sup>Optional</sup> <a name="DeleteBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```go
func DeleteBehaviorInput() *string
```

- *Type:* *string

---

##### `UpdateBehaviorInput`<sup>Optional</sup> <a name="UpdateBehaviorInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```go
func UpdateBehaviorInput() *string
```

- *Type:* *string

---

##### `DeleteBehavior`<sup>Required</sup> <a name="DeleteBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```go
func DeleteBehavior() *string
```

- *Type:* *string

---

##### `UpdateBehavior`<sup>Required</sup> <a name="UpdateBehavior" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```go
func UpdateBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsCatalogTargetsList <a name="GlueCrawlerTargetsCatalogTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsCatalogTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerTargetsCatalogTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get"></a>

```go
func Get(index *f64) GlueCrawlerTargetsCatalogTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsCatalogTargetsOutputReference <a name="GlueCrawlerTargetsCatalogTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsCatalogTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerTargetsCatalogTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDlqEventQueueArn` <a name="ResetDlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetDlqEventQueueArn"></a>

```go
func ResetDlqEventQueueArn()
```

##### `ResetEventQueueArn` <a name="ResetEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetEventQueueArn"></a>

```go
func ResetEventQueueArn()
```

##### `ResetTables` <a name="ResetTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.resetTables"></a>

```go
func ResetTables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArnInput">DlqEventQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArnInput">EventQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tablesInput">TablesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn">EventQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tables">Tables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DlqEventQueueArnInput`<sup>Optional</sup> <a name="DlqEventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArnInput"></a>

```go
func DlqEventQueueArnInput() *string
```

- *Type:* *string

---

##### `EventQueueArnInput`<sup>Optional</sup> <a name="EventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArnInput"></a>

```go
func EventQueueArnInput() *string
```

- *Type:* *string

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tablesInput"></a>

```go
func TablesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DlqEventQueueArn`<sup>Required</sup> <a name="DlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.dlqEventQueueArn"></a>

```go
func DlqEventQueueArn() *string
```

- *Type:* *string

---

##### `EventQueueArn`<sup>Required</sup> <a name="EventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.eventQueueArn"></a>

```go
func EventQueueArn() *string
```

- *Type:* *string

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.tables"></a>

```go
func Tables() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsDeltaTargetsList <a name="GlueCrawlerTargetsDeltaTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsDeltaTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerTargetsDeltaTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get"></a>

```go
func Get(index *f64) GlueCrawlerTargetsDeltaTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsDeltaTargetsOutputReference <a name="GlueCrawlerTargetsDeltaTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsDeltaTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerTargetsDeltaTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetCreateNativeDeltaTable` <a name="ResetCreateNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetCreateNativeDeltaTable"></a>

```go
func ResetCreateNativeDeltaTable()
```

##### `ResetDeltaTables` <a name="ResetDeltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetDeltaTables"></a>

```go
func ResetDeltaTables()
```

##### `ResetWriteManifest` <a name="ResetWriteManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.resetWriteManifest"></a>

```go
func ResetWriteManifest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTableInput">CreateNativeDeltaTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTablesInput">DeltaTablesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifestInput">WriteManifestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable">CreateNativeDeltaTable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables">DeltaTables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest">WriteManifest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `CreateNativeDeltaTableInput`<sup>Optional</sup> <a name="CreateNativeDeltaTableInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTableInput"></a>

```go
func CreateNativeDeltaTableInput() interface{}
```

- *Type:* interface{}

---

##### `DeltaTablesInput`<sup>Optional</sup> <a name="DeltaTablesInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTablesInput"></a>

```go
func DeltaTablesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WriteManifestInput`<sup>Optional</sup> <a name="WriteManifestInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifestInput"></a>

```go
func WriteManifestInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `CreateNativeDeltaTable`<sup>Required</sup> <a name="CreateNativeDeltaTable" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.createNativeDeltaTable"></a>

```go
func CreateNativeDeltaTable() interface{}
```

- *Type:* interface{}

---

##### `DeltaTables`<sup>Required</sup> <a name="DeltaTables" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.deltaTables"></a>

```go
func DeltaTables() *[]*string
```

- *Type:* *[]*string

---

##### `WriteManifest`<sup>Required</sup> <a name="WriteManifest" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.writeManifest"></a>

```go
func WriteManifest() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsDynamoDbTargetsList <a name="GlueCrawlerTargetsDynamoDbTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsDynamoDbTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerTargetsDynamoDbTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get"></a>

```go
func Get(index *f64) GlueCrawlerTargetsDynamoDbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsDynamoDbTargetsOutputReference <a name="GlueCrawlerTargetsDynamoDbTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsDynamoDbTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerTargetsDynamoDbTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetScanAll` <a name="ResetScanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanAll"></a>

```go
func ResetScanAll()
```

##### `ResetScanRate` <a name="ResetScanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.resetScanRate"></a>

```go
func ResetScanRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAllInput">ScanAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRateInput">ScanRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll">ScanAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate">ScanRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ScanAllInput`<sup>Optional</sup> <a name="ScanAllInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAllInput"></a>

```go
func ScanAllInput() interface{}
```

- *Type:* interface{}

---

##### `ScanRateInput`<sup>Optional</sup> <a name="ScanRateInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRateInput"></a>

```go
func ScanRateInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ScanAll`<sup>Required</sup> <a name="ScanAll" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanAll"></a>

```go
func ScanAll() interface{}
```

- *Type:* interface{}

---

##### `ScanRate`<sup>Required</sup> <a name="ScanRate" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.scanRate"></a>

```go
func ScanRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsHudiTargetsList <a name="GlueCrawlerTargetsHudiTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsHudiTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerTargetsHudiTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get"></a>

```go
func Get(index *f64) GlueCrawlerTargetsHudiTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsHudiTargetsOutputReference <a name="GlueCrawlerTargetsHudiTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsHudiTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerTargetsHudiTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetMaximumTraversalDepth` <a name="ResetMaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetMaximumTraversalDepth"></a>

```go
func ResetMaximumTraversalDepth()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.resetPaths"></a>

```go
func ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepthInput">MaximumTraversalDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth">MaximumTraversalDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumTraversalDepthInput`<sup>Optional</sup> <a name="MaximumTraversalDepthInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepthInput"></a>

```go
func MaximumTraversalDepthInput() *f64
```

- *Type:* *f64

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumTraversalDepth`<sup>Required</sup> <a name="MaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.maximumTraversalDepth"></a>

```go
func MaximumTraversalDepth() *f64
```

- *Type:* *f64

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsIcebergTargetsList <a name="GlueCrawlerTargetsIcebergTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsIcebergTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerTargetsIcebergTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get"></a>

```go
func Get(index *f64) GlueCrawlerTargetsIcebergTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsIcebergTargetsOutputReference <a name="GlueCrawlerTargetsIcebergTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsIcebergTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerTargetsIcebergTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetMaximumTraversalDepth` <a name="ResetMaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetMaximumTraversalDepth"></a>

```go
func ResetMaximumTraversalDepth()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.resetPaths"></a>

```go
func ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepthInput">MaximumTraversalDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth">MaximumTraversalDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumTraversalDepthInput`<sup>Optional</sup> <a name="MaximumTraversalDepthInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepthInput"></a>

```go
func MaximumTraversalDepthInput() *f64
```

- *Type:* *f64

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumTraversalDepth`<sup>Required</sup> <a name="MaximumTraversalDepth" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.maximumTraversalDepth"></a>

```go
func MaximumTraversalDepth() *f64
```

- *Type:* *f64

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsJdbcTargetsList <a name="GlueCrawlerTargetsJdbcTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsJdbcTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerTargetsJdbcTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get"></a>

```go
func Get(index *f64) GlueCrawlerTargetsJdbcTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsJdbcTargetsOutputReference <a name="GlueCrawlerTargetsJdbcTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsJdbcTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerTargetsJdbcTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetEnableAdditionalMetadata` <a name="ResetEnableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetEnableAdditionalMetadata"></a>

```go
func ResetEnableAdditionalMetadata()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadataInput">EnableAdditionalMetadataInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata">EnableAdditionalMetadata</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `EnableAdditionalMetadataInput`<sup>Optional</sup> <a name="EnableAdditionalMetadataInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadataInput"></a>

```go
func EnableAdditionalMetadataInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `EnableAdditionalMetadata`<sup>Required</sup> <a name="EnableAdditionalMetadata" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.enableAdditionalMetadata"></a>

```go
func EnableAdditionalMetadata() *[]*string
```

- *Type:* *[]*string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsMongoDbTargetsList <a name="GlueCrawlerTargetsMongoDbTargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsMongoDbTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerTargetsMongoDbTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get"></a>

```go
func Get(index *f64) GlueCrawlerTargetsMongoDbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsMongoDbTargetsOutputReference <a name="GlueCrawlerTargetsMongoDbTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsMongoDbTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerTargetsMongoDbTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsOutputReference <a name="GlueCrawlerTargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueCrawlerTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalogTargets` <a name="PutCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets"></a>

```go
func PutCatalogTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putCatalogTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeltaTargets` <a name="PutDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets"></a>

```go
func PutDeltaTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDeltaTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDynamoDbTargets` <a name="PutDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets"></a>

```go
func PutDynamoDbTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putDynamoDbTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHudiTargets` <a name="PutHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets"></a>

```go
func PutHudiTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putHudiTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIcebergTargets` <a name="PutIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets"></a>

```go
func PutIcebergTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putIcebergTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutJdbcTargets` <a name="PutJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets"></a>

```go
func PutJdbcTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putJdbcTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMongoDbTargets` <a name="PutMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets"></a>

```go
func PutMongoDbTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putMongoDbTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutS3Targets` <a name="PutS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets"></a>

```go
func PutS3Targets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.putS3Targets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalogTargets` <a name="ResetCatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetCatalogTargets"></a>

```go
func ResetCatalogTargets()
```

##### `ResetDeltaTargets` <a name="ResetDeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDeltaTargets"></a>

```go
func ResetDeltaTargets()
```

##### `ResetDynamoDbTargets` <a name="ResetDynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetDynamoDbTargets"></a>

```go
func ResetDynamoDbTargets()
```

##### `ResetHudiTargets` <a name="ResetHudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetHudiTargets"></a>

```go
func ResetHudiTargets()
```

##### `ResetIcebergTargets` <a name="ResetIcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetIcebergTargets"></a>

```go
func ResetIcebergTargets()
```

##### `ResetJdbcTargets` <a name="ResetJdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetJdbcTargets"></a>

```go
func ResetJdbcTargets()
```

##### `ResetMongoDbTargets` <a name="ResetMongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetMongoDbTargets"></a>

```go
func ResetMongoDbTargets()
```

##### `ResetS3Targets` <a name="ResetS3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.resetS3Targets"></a>

```go
func ResetS3Targets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargets">CatalogTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList">GlueCrawlerTargetsCatalogTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargets">DeltaTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList">GlueCrawlerTargetsDeltaTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargets">DynamoDbTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList">GlueCrawlerTargetsDynamoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargets">HudiTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList">GlueCrawlerTargetsHudiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargets">IcebergTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList">GlueCrawlerTargetsIcebergTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargets">JdbcTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList">GlueCrawlerTargetsJdbcTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargets">MongoDbTargets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList">GlueCrawlerTargetsMongoDbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3Targets">S3Targets</a></code> | <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList">GlueCrawlerTargetsS3TargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargetsInput">CatalogTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargetsInput">DeltaTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargetsInput">DynamoDbTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargetsInput">HudiTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargetsInput">IcebergTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargetsInput">JdbcTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargetsInput">MongoDbTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3TargetsInput">S3TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogTargets`<sup>Required</sup> <a name="CatalogTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargets"></a>

```go
func CatalogTargets() GlueCrawlerTargetsCatalogTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsCatalogTargetsList">GlueCrawlerTargetsCatalogTargetsList</a>

---

##### `DeltaTargets`<sup>Required</sup> <a name="DeltaTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargets"></a>

```go
func DeltaTargets() GlueCrawlerTargetsDeltaTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDeltaTargetsList">GlueCrawlerTargetsDeltaTargetsList</a>

---

##### `DynamoDbTargets`<sup>Required</sup> <a name="DynamoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargets"></a>

```go
func DynamoDbTargets() GlueCrawlerTargetsDynamoDbTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsDynamoDbTargetsList">GlueCrawlerTargetsDynamoDbTargetsList</a>

---

##### `HudiTargets`<sup>Required</sup> <a name="HudiTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargets"></a>

```go
func HudiTargets() GlueCrawlerTargetsHudiTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsHudiTargetsList">GlueCrawlerTargetsHudiTargetsList</a>

---

##### `IcebergTargets`<sup>Required</sup> <a name="IcebergTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargets"></a>

```go
func IcebergTargets() GlueCrawlerTargetsIcebergTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsIcebergTargetsList">GlueCrawlerTargetsIcebergTargetsList</a>

---

##### `JdbcTargets`<sup>Required</sup> <a name="JdbcTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargets"></a>

```go
func JdbcTargets() GlueCrawlerTargetsJdbcTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsJdbcTargetsList">GlueCrawlerTargetsJdbcTargetsList</a>

---

##### `MongoDbTargets`<sup>Required</sup> <a name="MongoDbTargets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargets"></a>

```go
func MongoDbTargets() GlueCrawlerTargetsMongoDbTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsMongoDbTargetsList">GlueCrawlerTargetsMongoDbTargetsList</a>

---

##### `S3Targets`<sup>Required</sup> <a name="S3Targets" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3Targets"></a>

```go
func S3Targets() GlueCrawlerTargetsS3TargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList">GlueCrawlerTargetsS3TargetsList</a>

---

##### `CatalogTargetsInput`<sup>Optional</sup> <a name="CatalogTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.catalogTargetsInput"></a>

```go
func CatalogTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `DeltaTargetsInput`<sup>Optional</sup> <a name="DeltaTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.deltaTargetsInput"></a>

```go
func DeltaTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `DynamoDbTargetsInput`<sup>Optional</sup> <a name="DynamoDbTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.dynamoDbTargetsInput"></a>

```go
func DynamoDbTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `HudiTargetsInput`<sup>Optional</sup> <a name="HudiTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.hudiTargetsInput"></a>

```go
func HudiTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `IcebergTargetsInput`<sup>Optional</sup> <a name="IcebergTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.icebergTargetsInput"></a>

```go
func IcebergTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `JdbcTargetsInput`<sup>Optional</sup> <a name="JdbcTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.jdbcTargetsInput"></a>

```go
func JdbcTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `MongoDbTargetsInput`<sup>Optional</sup> <a name="MongoDbTargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.mongoDbTargetsInput"></a>

```go
func MongoDbTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `S3TargetsInput`<sup>Optional</sup> <a name="S3TargetsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.s3TargetsInput"></a>

```go
func S3TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsS3TargetsList <a name="GlueCrawlerTargetsS3TargetsList" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsS3TargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueCrawlerTargetsS3TargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get"></a>

```go
func Get(index *f64) GlueCrawlerTargetsS3TargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueCrawlerTargetsS3TargetsOutputReference <a name="GlueCrawlerTargetsS3TargetsOutputReference" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluecrawler"

gluecrawler.NewGlueCrawlerTargetsS3TargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueCrawlerTargetsS3TargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetDlqEventQueueArn` <a name="ResetDlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetDlqEventQueueArn"></a>

```go
func ResetDlqEventQueueArn()
```

##### `ResetEventQueueArn` <a name="ResetEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetEventQueueArn"></a>

```go
func ResetEventQueueArn()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.resetSampleSize"></a>

```go
func ResetSampleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArnInput">DlqEventQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArnInput">EventQueueArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn">EventQueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `DlqEventQueueArnInput`<sup>Optional</sup> <a name="DlqEventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArnInput"></a>

```go
func DlqEventQueueArnInput() *string
```

- *Type:* *string

---

##### `EventQueueArnInput`<sup>Optional</sup> <a name="EventQueueArnInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArnInput"></a>

```go
func EventQueueArnInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSizeInput"></a>

```go
func SampleSizeInput() *f64
```

- *Type:* *f64

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `DlqEventQueueArn`<sup>Required</sup> <a name="DlqEventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.dlqEventQueueArn"></a>

```go
func DlqEventQueueArn() *string
```

- *Type:* *string

---

##### `EventQueueArn`<sup>Required</sup> <a name="EventQueueArn" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.eventQueueArn"></a>

```go
func EventQueueArn() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.sampleSize"></a>

```go
func SampleSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueCrawler.GlueCrawlerTargetsS3TargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



