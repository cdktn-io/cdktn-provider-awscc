# `qbusinessDataSource` Submodule <a name="`qbusinessDataSource` Submodule" id="@cdktn/provider-awscc.qbusinessDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessDataSource <a name="QbusinessDataSource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source awscc_qbusiness_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSource(scope Construct, id *string, config QbusinessDataSourceConfig) QbusinessDataSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig">QbusinessDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig">QbusinessDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration">PutDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration">PutMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDocumentEnrichmentConfiguration">ResetDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetMediaExtractionConfiguration">ResetMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetSyncSchedule">ResetSyncSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDocumentEnrichmentConfiguration` <a name="PutDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration"></a>

```go
func PutDocumentEnrichmentConfiguration(value QbusinessDataSourceDocumentEnrichmentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

---

##### `PutMediaExtractionConfiguration` <a name="PutMediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration"></a>

```go
func PutMediaExtractionConfiguration(value QbusinessDataSourceMediaExtractionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration"></a>

```go
func PutVpcConfiguration(value QbusinessDataSourceVpcConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocumentEnrichmentConfiguration` <a name="ResetDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDocumentEnrichmentConfiguration"></a>

```go
func ResetDocumentEnrichmentConfiguration()
```

##### `ResetMediaExtractionConfiguration` <a name="ResetMediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetMediaExtractionConfiguration"></a>

```go
func ResetMediaExtractionConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSyncSchedule` <a name="ResetSyncSchedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetSyncSchedule"></a>

```go
func ResetSyncSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetVpcConfiguration"></a>

```go
func ResetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.QbusinessDataSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.QbusinessDataSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.QbusinessDataSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.QbusinessDataSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QbusinessDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QbusinessDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QbusinessDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfiguration">DocumentEnrichmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfiguration">MediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList">QbusinessDataSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference">QbusinessDataSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configurationInput">ConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfigurationInput">DocumentEnrichmentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexIdInput">IndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfigurationInput">MediaExtractionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncScheduleInput">SyncScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncSchedule">SyncSchedule</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `DocumentEnrichmentConfiguration`<sup>Required</sup> <a name="DocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfiguration"></a>

```go
func DocumentEnrichmentConfiguration() QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MediaExtractionConfiguration`<sup>Required</sup> <a name="MediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfiguration"></a>

```go
func MediaExtractionConfiguration() QbusinessDataSourceMediaExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tags"></a>

```go
func Tags() QbusinessDataSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList">QbusinessDataSourceTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfiguration"></a>

```go
func VpcConfiguration() QbusinessDataSourceVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference">QbusinessDataSourceVpcConfigurationOutputReference</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configurationInput"></a>

```go
func ConfigurationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DocumentEnrichmentConfigurationInput`<sup>Optional</sup> <a name="DocumentEnrichmentConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfigurationInput"></a>

```go
func DocumentEnrichmentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexIdInput"></a>

```go
func IndexIdInput() *string
```

- *Type:* *string

---

##### `MediaExtractionConfigurationInput`<sup>Optional</sup> <a name="MediaExtractionConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfigurationInput"></a>

```go
func MediaExtractionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SyncScheduleInput`<sup>Optional</sup> <a name="SyncScheduleInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncScheduleInput"></a>

```go
func SyncScheduleInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfigurationInput"></a>

```go
func VpcConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SyncSchedule`<sup>Required</sup> <a name="SyncSchedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncSchedule"></a>

```go
func SyncSchedule() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessDataSourceConfig <a name="QbusinessDataSourceConfig" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Configuration: *string,
	DisplayName: *string,
	IndexId: *string,
	Description: *string,
	DocumentEnrichmentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration,
	MediaExtractionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration,
	RoleArn: *string,
	SyncSchedule: *string,
	Tags: interface{},
	VpcConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.configuration">Configuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.indexId">IndexId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.documentEnrichmentConfiguration">DocumentEnrichmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.mediaExtractionConfiguration">MediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.syncSchedule">SyncSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}.

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.configuration"></a>

```go
Configuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}.

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.indexId"></a>

```go
IndexId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}.

---

##### `DocumentEnrichmentConfiguration`<sup>Optional</sup> <a name="DocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.documentEnrichmentConfiguration"></a>

```go
DocumentEnrichmentConfiguration QbusinessDataSourceDocumentEnrichmentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}.

---

##### `MediaExtractionConfiguration`<sup>Optional</sup> <a name="MediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.mediaExtractionConfiguration"></a>

```go
MediaExtractionConfiguration QbusinessDataSourceMediaExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `SyncSchedule`<sup>Optional</sup> <a name="SyncSchedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.syncSchedule"></a>

```go
SyncSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}.

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.vpcConfiguration"></a>

```go
VpcConfiguration QbusinessDataSourceVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}.

---

### QbusinessDataSourceDocumentEnrichmentConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfiguration {
	InlineConfigurations: interface{},
	PostExtractionHookConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration,
	PreExtractionHookConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.inlineConfigurations">InlineConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#inline_configurations QbusinessDataSource#inline_configurations}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration">PostExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#post_extraction_hook_configuration QbusinessDataSource#post_extraction_hook_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration">PreExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration QbusinessDataSource#pre_extraction_hook_configuration}. |

---

##### `InlineConfigurations`<sup>Optional</sup> <a name="InlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.inlineConfigurations"></a>

```go
InlineConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#inline_configurations QbusinessDataSource#inline_configurations}.

---

##### `PostExtractionHookConfiguration`<sup>Optional</sup> <a name="PostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration"></a>

```go
PostExtractionHookConfiguration QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#post_extraction_hook_configuration QbusinessDataSource#post_extraction_hook_configuration}.

---

##### `PreExtractionHookConfiguration`<sup>Optional</sup> <a name="PreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration"></a>

```go
PreExtractionHookConfiguration QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration QbusinessDataSource#pre_extraction_hook_configuration}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations {
	Condition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition,
	DocumentContentOperator: *string,
	Target: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#condition QbusinessDataSource#condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentOperator">DocumentContentOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#document_content_operator QbusinessDataSource#document_content_operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#target QbusinessDataSource#target}. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.condition"></a>

```go
Condition QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#condition QbusinessDataSource#condition}.

---

##### `DocumentContentOperator`<sup>Optional</sup> <a name="DocumentContentOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentOperator"></a>

```go
DocumentContentOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#document_content_operator QbusinessDataSource#document_content_operator}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.target"></a>

```go
Target QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#target QbusinessDataSource#target}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition {
	Key: *string,
	Operator: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.value"></a>

```go
Value QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue {
	DateValue: *string,
	LongValue: *f64,
	StringListValue: *[]*string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.dateValue">DateValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.longValue">LongValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.dateValue"></a>

```go
DateValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.longValue"></a>

```go
LongValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringListValue"></a>

```go
StringListValue *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget {
	AttributeValueOperator: *string,
	Key: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.attributeValueOperator">AttributeValueOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#attribute_value_operator QbusinessDataSource#attribute_value_operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `AttributeValueOperator`<sup>Optional</sup> <a name="AttributeValueOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.attributeValueOperator"></a>

```go
AttributeValueOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#attribute_value_operator QbusinessDataSource#attribute_value_operator}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.value"></a>

```go
Value QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue {
	DateValue: *string,
	LongValue: *f64,
	StringListValue: *[]*string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.dateValue">DateValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.longValue">LongValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.dateValue"></a>

```go
DateValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.longValue"></a>

```go
LongValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringListValue"></a>

```go
StringListValue *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration {
	InvocationCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition,
	LambdaArn: *string,
	RoleArn: *string,
	S3BucketName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}. |

---

##### `InvocationCondition`<sup>Optional</sup> <a name="InvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition"></a>

```go
InvocationCondition QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}.

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition {
	Key: *string,
	Operator: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.value"></a>

```go
Value QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue {
	DateValue: *string,
	LongValue: *f64,
	StringListValue: *[]*string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.dateValue">DateValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.longValue">LongValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.dateValue"></a>

```go
DateValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.longValue"></a>

```go
LongValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringListValue"></a>

```go
StringListValue *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration {
	InvocationCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition,
	LambdaArn: *string,
	RoleArn: *string,
	S3BucketName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}. |

---

##### `InvocationCondition`<sup>Optional</sup> <a name="InvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition"></a>

```go
InvocationCondition QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}.

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition {
	Key: *string,
	Operator: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.value"></a>

```go
Value QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue {
	DateValue: *string,
	LongValue: *f64,
	StringListValue: *[]*string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.dateValue">DateValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.longValue">LongValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.dateValue"></a>

```go
DateValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.longValue"></a>

```go
LongValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `StringListValue`<sup>Optional</sup> <a name="StringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringListValue"></a>

```go
StringListValue *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceMediaExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceMediaExtractionConfiguration {
	AudioExtractionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration,
	ImageExtractionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration,
	VideoExtractionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.audioExtractionConfiguration">AudioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#audio_extraction_configuration QbusinessDataSource#audio_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.imageExtractionConfiguration">ImageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#image_extraction_configuration QbusinessDataSource#image_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.videoExtractionConfiguration">VideoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#video_extraction_configuration QbusinessDataSource#video_extraction_configuration}. |

---

##### `AudioExtractionConfiguration`<sup>Optional</sup> <a name="AudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.audioExtractionConfiguration"></a>

```go
AudioExtractionConfiguration QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#audio_extraction_configuration QbusinessDataSource#audio_extraction_configuration}.

---

##### `ImageExtractionConfiguration`<sup>Optional</sup> <a name="ImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.imageExtractionConfiguration"></a>

```go
ImageExtractionConfiguration QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#image_extraction_configuration QbusinessDataSource#image_extraction_configuration}.

---

##### `VideoExtractionConfiguration`<sup>Optional</sup> <a name="VideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.videoExtractionConfiguration"></a>

```go
VideoExtractionConfiguration QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#video_extraction_configuration QbusinessDataSource#video_extraction_configuration}.

---

### QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration {
	AudioExtractionStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus">AudioExtractionStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#audio_extraction_status QbusinessDataSource#audio_extraction_status}. |

---

##### `AudioExtractionStatus`<sup>Optional</sup> <a name="AudioExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus"></a>

```go
AudioExtractionStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#audio_extraction_status QbusinessDataSource#audio_extraction_status}.

---

### QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration {
	ImageExtractionStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus">ImageExtractionStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#image_extraction_status QbusinessDataSource#image_extraction_status}. |

---

##### `ImageExtractionStatus`<sup>Optional</sup> <a name="ImageExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus"></a>

```go
ImageExtractionStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#image_extraction_status QbusinessDataSource#image_extraction_status}.

---

### QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration {
	VideoExtractionStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus">VideoExtractionStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#video_extraction_status QbusinessDataSource#video_extraction_status}. |

---

##### `VideoExtractionStatus`<sup>Optional</sup> <a name="VideoExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus"></a>

```go
VideoExtractionStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#video_extraction_status QbusinessDataSource#video_extraction_status}.

---

### QbusinessDataSourceTags <a name="QbusinessDataSourceTags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceVpcConfiguration <a name="QbusinessDataSourceVpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

&qbusinessdatasource.QbusinessDataSourceVpcConfiguration {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#security_group_ids QbusinessDataSource#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#subnet_ids QbusinessDataSource#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#security_group_ids QbusinessDataSource#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_data_source#subnet_ids QbusinessDataSource#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue"></a>

```go
func PutValue(value QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value"></a>

```go
func Value() QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetDateValue"></a>

```go
func ResetDateValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetLongValue"></a>

```go
func ResetLongValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringListValue"></a>

```go
func ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValueInput"></a>

```go
func DateValueInput() *string
```

- *Type:* *string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValueInput"></a>

```go
func LongValueInput() *f64
```

- *Type:* *f64

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValueInput"></a>

```go
func StringListValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get"></a>

```go
func Get(index *f64) QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentOperator">ResetDocumentContentOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition"></a>

```go
func PutCondition(value QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget"></a>

```go
func PutTarget(value QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDocumentContentOperator` <a name="ResetDocumentContentOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentOperator"></a>

```go
func ResetDocumentContentOperator()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperatorInput">DocumentContentOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator">DocumentContentOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition"></a>

```go
func Condition() QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target"></a>

```go
func Target() QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput"></a>

```go
func ConditionInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentContentOperatorInput`<sup>Optional</sup> <a name="DocumentContentOperatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperatorInput"></a>

```go
func DocumentContentOperatorInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentContentOperator`<sup>Required</sup> <a name="DocumentContentOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator"></a>

```go
func DocumentContentOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetAttributeValueOperator">ResetAttributeValueOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue"></a>

```go
func PutValue(value QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

---

##### `ResetAttributeValueOperator` <a name="ResetAttributeValueOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetAttributeValueOperator"></a>

```go
func ResetAttributeValueOperator()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperatorInput">AttributeValueOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator">AttributeValueOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value"></a>

```go
func Value() QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a>

---

##### `AttributeValueOperatorInput`<sup>Optional</sup> <a name="AttributeValueOperatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperatorInput"></a>

```go
func AttributeValueOperatorInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeValueOperator`<sup>Required</sup> <a name="AttributeValueOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator"></a>

```go
func AttributeValueOperator() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetDateValue"></a>

```go
func ResetDateValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetLongValue"></a>

```go
func ResetLongValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringListValue"></a>

```go
func ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValueInput"></a>

```go
func DateValueInput() *string
```

- *Type:* *string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValueInput"></a>

```go
func LongValueInput() *f64
```

- *Type:* *f64

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValueInput"></a>

```go
func StringListValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations">PutInlineConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration">PutPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration">PutPreExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations">ResetInlineConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration">ResetPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration">ResetPreExtractionHookConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInlineConfigurations` <a name="PutInlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations"></a>

```go
func PutInlineConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPostExtractionHookConfiguration` <a name="PutPostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration"></a>

```go
func PutPostExtractionHookConfiguration(value QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---

##### `PutPreExtractionHookConfiguration` <a name="PutPreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration"></a>

```go
func PutPreExtractionHookConfiguration(value QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---

##### `ResetInlineConfigurations` <a name="ResetInlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations"></a>

```go
func ResetInlineConfigurations()
```

##### `ResetPostExtractionHookConfiguration` <a name="ResetPostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration"></a>

```go
func ResetPostExtractionHookConfiguration()
```

##### `ResetPreExtractionHookConfiguration` <a name="ResetPreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration"></a>

```go
func ResetPreExtractionHookConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations">InlineConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration">PostExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration">PreExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput">InlineConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput">PostExtractionHookConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput">PreExtractionHookConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InlineConfigurations`<sup>Required</sup> <a name="InlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations"></a>

```go
func InlineConfigurations() QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a>

---

##### `PostExtractionHookConfiguration`<sup>Required</sup> <a name="PostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration"></a>

```go
func PostExtractionHookConfiguration() QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a>

---

##### `PreExtractionHookConfiguration`<sup>Required</sup> <a name="PreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration"></a>

```go
func PreExtractionHookConfiguration() QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a>

---

##### `InlineConfigurationsInput`<sup>Optional</sup> <a name="InlineConfigurationsInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput"></a>

```go
func InlineConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `PostExtractionHookConfigurationInput`<sup>Optional</sup> <a name="PostExtractionHookConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput"></a>

```go
func PostExtractionHookConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PreExtractionHookConfigurationInput`<sup>Optional</sup> <a name="PreExtractionHookConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput"></a>

```go
func PreExtractionHookConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue"></a>

```go
func PutValue(value QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```go
func Value() QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue"></a>

```go
func ResetDateValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue"></a>

```go
func ResetLongValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue"></a>

```go
func ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput"></a>

```go
func DateValueInput() *string
```

- *Type:* *string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput"></a>

```go
func LongValueInput() *f64
```

- *Type:* *f64

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput"></a>

```go
func StringListValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition">PutInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition">ResetInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvocationCondition` <a name="PutInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```go
func PutInvocationCondition(value QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---

##### `ResetInvocationCondition` <a name="ResetInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```go
func ResetInvocationCondition()
```

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetLambdaArn"></a>

```go
func ResetLambdaArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput">InvocationConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvocationCondition`<sup>Required</sup> <a name="InvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```go
func InvocationCondition() QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `InvocationConditionInput`<sup>Optional</sup> <a name="InvocationConditionInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```go
func InvocationConditionInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue"></a>

```go
func PutValue(value QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```go
func Value() QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue">ResetStringListValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue"></a>

```go
func ResetDateValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue"></a>

```go
func ResetLongValue()
```

##### `ResetStringListValue` <a name="ResetStringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue"></a>

```go
func ResetStringListValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput">StringListValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">StringListValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput"></a>

```go
func DateValueInput() *string
```

- *Type:* *string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput"></a>

```go
func LongValueInput() *f64
```

- *Type:* *f64

---

##### `StringListValueInput`<sup>Optional</sup> <a name="StringListValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput"></a>

```go
func StringListValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringListValue`<sup>Required</sup> <a name="StringListValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```go
func StringListValue() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition">PutInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition">ResetInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvocationCondition` <a name="PutInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```go
func PutInvocationCondition(value QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---

##### `ResetInvocationCondition` <a name="ResetInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```go
func ResetInvocationCondition()
```

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetLambdaArn"></a>

```go
func ResetLambdaArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition">InvocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput">InvocationConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvocationCondition`<sup>Required</sup> <a name="InvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```go
func InvocationCondition() QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `InvocationConditionInput`<sup>Optional</sup> <a name="InvocationConditionInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```go
func InvocationConditionInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus">ResetAudioExtractionStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioExtractionStatus` <a name="ResetAudioExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus"></a>

```go
func ResetAudioExtractionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput">AudioExtractionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">AudioExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioExtractionStatusInput`<sup>Optional</sup> <a name="AudioExtractionStatusInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput"></a>

```go
func AudioExtractionStatusInput() *string
```

- *Type:* *string

---

##### `AudioExtractionStatus`<sup>Required</sup> <a name="AudioExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```go
func AudioExtractionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus">ResetImageExtractionStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageExtractionStatus` <a name="ResetImageExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus"></a>

```go
func ResetImageExtractionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput">ImageExtractionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">ImageExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageExtractionStatusInput`<sup>Optional</sup> <a name="ImageExtractionStatusInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput"></a>

```go
func ImageExtractionStatusInput() *string
```

- *Type:* *string

---

##### `ImageExtractionStatus`<sup>Required</sup> <a name="ImageExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```go
func ImageExtractionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceMediaExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceMediaExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceMediaExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration">PutAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration">PutImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration">PutVideoExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration">ResetAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration">ResetImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration">ResetVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioExtractionConfiguration` <a name="PutAudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration"></a>

```go
func PutAudioExtractionConfiguration(value QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

---

##### `PutImageExtractionConfiguration` <a name="PutImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration"></a>

```go
func PutImageExtractionConfiguration(value QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

---

##### `PutVideoExtractionConfiguration` <a name="PutVideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration"></a>

```go
func PutVideoExtractionConfiguration(value QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

---

##### `ResetAudioExtractionConfiguration` <a name="ResetAudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration"></a>

```go
func ResetAudioExtractionConfiguration()
```

##### `ResetImageExtractionConfiguration` <a name="ResetImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration"></a>

```go
func ResetImageExtractionConfiguration()
```

##### `ResetVideoExtractionConfiguration` <a name="ResetVideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration"></a>

```go
func ResetVideoExtractionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">AudioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">ImageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">VideoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput">AudioExtractionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput">ImageExtractionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput">VideoExtractionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioExtractionConfiguration`<sup>Required</sup> <a name="AudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```go
func AudioExtractionConfiguration() QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `ImageExtractionConfiguration`<sup>Required</sup> <a name="ImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```go
func ImageExtractionConfiguration() QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `VideoExtractionConfiguration`<sup>Required</sup> <a name="VideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```go
func VideoExtractionConfiguration() QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `AudioExtractionConfigurationInput`<sup>Optional</sup> <a name="AudioExtractionConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput"></a>

```go
func AudioExtractionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ImageExtractionConfigurationInput`<sup>Optional</sup> <a name="ImageExtractionConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput"></a>

```go
func ImageExtractionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `VideoExtractionConfigurationInput`<sup>Optional</sup> <a name="VideoExtractionConfigurationInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput"></a>

```go
func VideoExtractionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus">ResetVideoExtractionStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVideoExtractionStatus` <a name="ResetVideoExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus"></a>

```go
func ResetVideoExtractionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput">VideoExtractionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">VideoExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VideoExtractionStatusInput`<sup>Optional</sup> <a name="VideoExtractionStatusInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput"></a>

```go
func VideoExtractionStatusInput() *string
```

- *Type:* *string

---

##### `VideoExtractionStatus`<sup>Required</sup> <a name="VideoExtractionStatus" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```go
func VideoExtractionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceTagsList <a name="QbusinessDataSourceTagsList" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QbusinessDataSourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get"></a>

```go
func Get(index *f64) QbusinessDataSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceTagsOutputReference <a name="QbusinessDataSourceTagsOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QbusinessDataSourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessDataSourceVpcConfigurationOutputReference <a name="QbusinessDataSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessdatasource"

qbusinessdatasource.NewQbusinessDataSourceVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessDataSourceVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



