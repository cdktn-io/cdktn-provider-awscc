# `datazoneDataSource` Submodule <a name="`datazoneDataSource` Submodule" id="@cdktn/provider-awscc.datazoneDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneDataSource <a name="DatazoneDataSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source awscc_datazone_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSource(scope Construct, id *string, config DatazoneDataSourceConfig) DatazoneDataSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig">DatazoneDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig">DatazoneDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput">PutAssetFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation">PutRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetAssetFormsInput">ResetAssetFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConnectionIdentifier">ResetConnectionIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnableSetting">ResetEnableSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnvironmentIdentifier">ResetEnvironmentIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetPublishOnImport">ResetPublishOnImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetRecommendation">ResetRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssetFormsInput` <a name="PutAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput"></a>

```go
func PutAssetFormsInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration"></a>

```go
func PutConfiguration(value DatazoneDataSourceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---

##### `PutRecommendation` <a name="PutRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation"></a>

```go
func PutRecommendation(value DatazoneDataSourceRecommendation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule"></a>

```go
func PutSchedule(value DatazoneDataSourceSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---

##### `ResetAssetFormsInput` <a name="ResetAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetAssetFormsInput"></a>

```go
func ResetAssetFormsInput()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetConnectionIdentifier` <a name="ResetConnectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConnectionIdentifier"></a>

```go
func ResetConnectionIdentifier()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableSetting` <a name="ResetEnableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnableSetting"></a>

```go
func ResetEnableSetting()
```

##### `ResetEnvironmentIdentifier` <a name="ResetEnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnvironmentIdentifier"></a>

```go
func ResetEnvironmentIdentifier()
```

##### `ResetPublishOnImport` <a name="ResetPublishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetPublishOnImport"></a>

```go
func ResetPublishOnImport()
```

##### `ResetRecommendation` <a name="ResetRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetRecommendation"></a>

```go
func ResetRecommendation()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetSchedule"></a>

```go
func ResetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.DatazoneDataSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.DatazoneDataSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.DatazoneDataSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.DatazoneDataSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatazoneDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInput">AssetFormsInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList">DatazoneDataSourceAssetFormsInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference">DatazoneDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAssetCount">LastRunAssetCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAt">LastRunAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunStatus">LastRunStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendation">Recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference">DatazoneDataSourceRecommendationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference">DatazoneDataSourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInputInput">AssetFormsInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifierInput">ConnectionIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSettingInput">EnableSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifierInput">ProjectIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImportInput">PublishOnImportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendationInput">RecommendationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifier">ConnectionIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSetting">EnableSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifier">ProjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImport">PublishOnImport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetFormsInput`<sup>Required</sup> <a name="AssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInput"></a>

```go
func AssetFormsInput() DatazoneDataSourceAssetFormsInputList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList">DatazoneDataSourceAssetFormsInputList</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configuration"></a>

```go
func Configuration() DatazoneDataSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference">DatazoneDataSourceConfigurationOutputReference</a>

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastRunAssetCount`<sup>Required</sup> <a name="LastRunAssetCount" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAssetCount"></a>

```go
func LastRunAssetCount() *f64
```

- *Type:* *f64

---

##### `LastRunAt`<sup>Required</sup> <a name="LastRunAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAt"></a>

```go
func LastRunAt() *string
```

- *Type:* *string

---

##### `LastRunStatus`<sup>Required</sup> <a name="LastRunStatus" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunStatus"></a>

```go
func LastRunStatus() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendation"></a>

```go
func Recommendation() DatazoneDataSourceRecommendationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference">DatazoneDataSourceRecommendationOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.schedule"></a>

```go
func Schedule() DatazoneDataSourceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference">DatazoneDataSourceScheduleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AssetFormsInputInput`<sup>Optional</sup> <a name="AssetFormsInputInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInputInput"></a>

```go
func AssetFormsInputInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionIdentifierInput`<sup>Optional</sup> <a name="ConnectionIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifierInput"></a>

```go
func ConnectionIdentifierInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifierInput"></a>

```go
func DomainIdentifierInput() *string
```

- *Type:* *string

---

##### `EnableSettingInput`<sup>Optional</sup> <a name="EnableSettingInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSettingInput"></a>

```go
func EnableSettingInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifierInput"></a>

```go
func EnvironmentIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdentifierInput`<sup>Optional</sup> <a name="ProjectIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifierInput"></a>

```go
func ProjectIdentifierInput() *string
```

- *Type:* *string

---

##### `PublishOnImportInput`<sup>Optional</sup> <a name="PublishOnImportInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImportInput"></a>

```go
func PublishOnImportInput() interface{}
```

- *Type:* interface{}

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendationInput"></a>

```go
func RecommendationInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ConnectionIdentifier`<sup>Required</sup> <a name="ConnectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifier"></a>

```go
func ConnectionIdentifier() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `EnableSetting`<sup>Required</sup> <a name="EnableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSetting"></a>

```go
func EnableSetting() *string
```

- *Type:* *string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifier"></a>

```go
func EnvironmentIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifier"></a>

```go
func ProjectIdentifier() *string
```

- *Type:* *string

---

##### `PublishOnImport`<sup>Required</sup> <a name="PublishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImport"></a>

```go
func PublishOnImport() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneDataSourceAssetFormsInput <a name="DatazoneDataSourceAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceAssetFormsInput {
	Content: *string,
	FormName: *string,
	TypeIdentifier: *string,
	TypeRevision: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.content">Content</a></code> | <code>*string</code> | The content of the metadata form. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.formName">FormName</a></code> | <code>*string</code> | The name of the metadata form. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeIdentifier">TypeIdentifier</a></code> | <code>*string</code> | The ID of the metadata form type. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeRevision">TypeRevision</a></code> | <code>*string</code> | The revision of the metadata form type. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.content"></a>

```go
Content *string
```

- *Type:* *string

The content of the metadata form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#content DatazoneDataSource#content}

---

##### `FormName`<sup>Optional</sup> <a name="FormName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.formName"></a>

```go
FormName *string
```

- *Type:* *string

The name of the metadata form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#form_name DatazoneDataSource#form_name}

---

##### `TypeIdentifier`<sup>Optional</sup> <a name="TypeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeIdentifier"></a>

```go
TypeIdentifier *string
```

- *Type:* *string

The ID of the metadata form type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type_identifier DatazoneDataSource#type_identifier}

---

##### `TypeRevision`<sup>Optional</sup> <a name="TypeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeRevision"></a>

```go
TypeRevision *string
```

- *Type:* *string

The revision of the metadata form type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type_revision DatazoneDataSource#type_revision}

---

### DatazoneDataSourceConfig <a name="DatazoneDataSourceConfig" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainIdentifier: *string,
	Name: *string,
	ProjectIdentifier: *string,
	Type: *string,
	AssetFormsInput: interface{},
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceConfiguration,
	ConnectionIdentifier: *string,
	Description: *string,
	EnableSetting: *string,
	EnvironmentIdentifier: *string,
	PublishOnImport: interface{},
	Recommendation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceRecommendation,
	Schedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | The ID of the Amazon DataZone domain where the data source is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.name">Name</a></code> | <code>*string</code> | The name of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.projectIdentifier">ProjectIdentifier</a></code> | <code>*string</code> | The identifier of the Amazon DataZone project in which you want to add the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.type">Type</a></code> | <code>*string</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.assetFormsInput">AssetFormsInput</a></code> | <code>interface{}</code> | The metadata forms that are to be attached to the assets that this data source works with. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connectionIdentifier">ConnectionIdentifier</a></code> | <code>*string</code> | The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.description">Description</a></code> | <code>*string</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.enableSetting">EnableSetting</a></code> | <code>*string</code> | Specifies whether the data source is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>*string</code> | The unique identifier of the Amazon DataZone environment to which the data source publishes assets. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.publishOnImport">PublishOnImport</a></code> | <code>interface{}</code> | Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.recommendation">Recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | Specifies whether the business name generation is to be enabled for this data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | The schedule of the data source runs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.domainIdentifier"></a>

```go
DomainIdentifier *string
```

- *Type:* *string

The ID of the Amazon DataZone domain where the data source is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#domain_identifier DatazoneDataSource#domain_identifier}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#name DatazoneDataSource#name}

---

##### `ProjectIdentifier`<sup>Required</sup> <a name="ProjectIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.projectIdentifier"></a>

```go
ProjectIdentifier *string
```

- *Type:* *string

The identifier of the Amazon DataZone project in which you want to add the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#project_identifier DatazoneDataSource#project_identifier}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

##### `AssetFormsInput`<sup>Optional</sup> <a name="AssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.assetFormsInput"></a>

```go
AssetFormsInput interface{}
```

- *Type:* interface{}

The metadata forms that are to be attached to the assets that this data source works with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#asset_forms_input DatazoneDataSource#asset_forms_input}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.configuration"></a>

```go
Configuration DatazoneDataSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#configuration DatazoneDataSource#configuration}

---

##### `ConnectionIdentifier`<sup>Optional</sup> <a name="ConnectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connectionIdentifier"></a>

```go
ConnectionIdentifier *string
```

- *Type:* *string

The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#connection_identifier DatazoneDataSource#connection_identifier}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#description DatazoneDataSource#description}

---

##### `EnableSetting`<sup>Optional</sup> <a name="EnableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.enableSetting"></a>

```go
EnableSetting *string
```

- *Type:* *string

Specifies whether the data source is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#enable_setting DatazoneDataSource#enable_setting}

---

##### `EnvironmentIdentifier`<sup>Optional</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.environmentIdentifier"></a>

```go
EnvironmentIdentifier *string
```

- *Type:* *string

The unique identifier of the Amazon DataZone environment to which the data source publishes assets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#environment_identifier DatazoneDataSource#environment_identifier}

---

##### `PublishOnImport`<sup>Optional</sup> <a name="PublishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.publishOnImport"></a>

```go
PublishOnImport interface{}
```

- *Type:* interface{}

Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#publish_on_import DatazoneDataSource#publish_on_import}

---

##### `Recommendation`<sup>Optional</sup> <a name="Recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.recommendation"></a>

```go
Recommendation DatazoneDataSourceRecommendation
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

Specifies whether the business name generation is to be enabled for this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#recommendation DatazoneDataSource#recommendation}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.schedule"></a>

```go
Schedule DatazoneDataSourceSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

### DatazoneDataSourceConfiguration <a name="DatazoneDataSourceConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfiguration {
	GlueRunConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration,
	RedshiftRunConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration,
	SageMakerRunConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.glueRunConfiguration">GlueRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.redshiftRunConfiguration">RedshiftRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | The configuration details of the Amazon Redshift data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.sageMakerRunConfiguration">SageMakerRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | The configuration details of the Amazon SageMaker data source. |

---

##### `GlueRunConfiguration`<sup>Optional</sup> <a name="GlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.glueRunConfiguration"></a>

```go
GlueRunConfiguration DatazoneDataSourceConfigurationGlueRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}.

---

##### `RedshiftRunConfiguration`<sup>Optional</sup> <a name="RedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.redshiftRunConfiguration"></a>

```go
RedshiftRunConfiguration DatazoneDataSourceConfigurationRedshiftRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

The configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_run_configuration DatazoneDataSource#redshift_run_configuration}

---

##### `SageMakerRunConfiguration`<sup>Optional</sup> <a name="SageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.sageMakerRunConfiguration"></a>

```go
SageMakerRunConfiguration DatazoneDataSourceConfigurationSageMakerRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

The configuration details of the Amazon SageMaker data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#sage_maker_run_configuration DatazoneDataSource#sage_maker_run_configuration}

---

### DatazoneDataSourceConfigurationGlueRunConfiguration <a name="DatazoneDataSourceConfigurationGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationGlueRunConfiguration {
	AutoImportDataQualityResult: interface{},
	CatalogName: *string,
	DataAccessRole: *string,
	RelationalFilterConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.autoImportDataQualityResult">AutoImportDataQualityResult</a></code> | <code>interface{}</code> | Specifies whether to automatically import data quality metrics as part of the data source run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.catalogName">CatalogName</a></code> | <code>*string</code> | The catalog name in the AWS Glue run configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.dataAccessRole">DataAccessRole</a></code> | <code>*string</code> | The data access role included in the configuration details of the AWS Glue data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code>interface{}</code> | The relational filter configurations included in the configuration details of the AWS Glue data source. |

---

##### `AutoImportDataQualityResult`<sup>Optional</sup> <a name="AutoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.autoImportDataQualityResult"></a>

```go
AutoImportDataQualityResult interface{}
```

- *Type:* interface{}

Specifies whether to automatically import data quality metrics as part of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#auto_import_data_quality_result DatazoneDataSource#auto_import_data_quality_result}

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

The catalog name in the AWS Glue run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#catalog_name DatazoneDataSource#catalog_name}

---

##### `DataAccessRole`<sup>Optional</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.dataAccessRole"></a>

```go
DataAccessRole *string
```

- *Type:* *string

The data access role included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

##### `RelationalFilterConfigurations`<sup>Optional</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.relationalFilterConfigurations"></a>

```go
RelationalFilterConfigurations interface{}
```

- *Type:* interface{}

The relational filter configurations included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations {
	DatabaseName: *string,
	FilterExpressions: interface{},
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The database name specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.filterExpressions">FilterExpressions</a></code> | <code>interface{}</code> | The filter expressions specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.schemaName">SchemaName</a></code> | <code>*string</code> | The schema name specified in the relational filter configuration for the data source. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The database name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#database_name DatazoneDataSource#database_name}

---

##### `FilterExpressions`<sup>Optional</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.filterExpressions"></a>

```go
FilterExpressions interface{}
```

- *Type:* interface{}

The filter expressions specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#filter_expressions DatazoneDataSource#filter_expressions}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The schema name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#schema_name DatazoneDataSource#schema_name}

---

### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions {
	Expression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type">Type</a></code> | <code>*string</code> | The search filter expression type. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type"></a>

```go
Type *string
```

- *Type:* *string

The search filter expression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

### DatazoneDataSourceConfigurationRedshiftRunConfiguration <a name="DatazoneDataSourceConfigurationRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationRedshiftRunConfiguration {
	DataAccessRole: *string,
	RedshiftCredentialConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration,
	RedshiftStorage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage,
	RelationalFilterConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.dataAccessRole">DataAccessRole</a></code> | <code>*string</code> | The data access role included in the configuration details of the Amazon Redshift data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftCredentialConfiguration">RedshiftCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | The details of the credentials required to access an Amazon Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftStorage">RedshiftStorage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code>interface{}</code> | The relational filter configurations included in the configuration details of the Amazon Redshift data source. |

---

##### `DataAccessRole`<sup>Optional</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.dataAccessRole"></a>

```go
DataAccessRole *string
```

- *Type:* *string

The data access role included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

##### `RedshiftCredentialConfiguration`<sup>Optional</sup> <a name="RedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftCredentialConfiguration"></a>

```go
RedshiftCredentialConfiguration DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

The details of the credentials required to access an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_credential_configuration DatazoneDataSource#redshift_credential_configuration}

---

##### `RedshiftStorage`<sup>Optional</sup> <a name="RedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftStorage"></a>

```go
RedshiftStorage DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_storage DatazoneDataSource#redshift_storage}

---

##### `RelationalFilterConfigurations`<sup>Optional</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.relationalFilterConfigurations"></a>

```go
RelationalFilterConfigurations interface{}
```

- *Type:* interface{}

The relational filter configurations included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration {
	SecretManagerArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.property.secretManagerArn">SecretManagerArn</a></code> | <code>*string</code> | The ARN of a secret manager for an Amazon Redshift cluster. |

---

##### `SecretManagerArn`<sup>Optional</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.property.secretManagerArn"></a>

```go
SecretManagerArn *string
```

- *Type:* *string

The ARN of a secret manager for an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#secret_manager_arn DatazoneDataSource#secret_manager_arn}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage {
	RedshiftClusterSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource,
	RedshiftServerlessSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftClusterSource">RedshiftClusterSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | The name of an Amazon Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftServerlessSource">RedshiftServerlessSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | The details of the Amazon Redshift Serverless workgroup storage. |

---

##### `RedshiftClusterSource`<sup>Optional</sup> <a name="RedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftClusterSource"></a>

```go
RedshiftClusterSource DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_cluster_source DatazoneDataSource#redshift_cluster_source}

---

##### `RedshiftServerlessSource`<sup>Optional</sup> <a name="RedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftServerlessSource"></a>

```go
RedshiftServerlessSource DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

The details of the Amazon Redshift Serverless workgroup storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_serverless_source DatazoneDataSource#redshift_serverless_source}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource {
	ClusterName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.property.clusterName">ClusterName</a></code> | <code>*string</code> | The name of an Amazon Redshift cluster. |

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#cluster_name DatazoneDataSource#cluster_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource {
	WorkgroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | The name of the Amazon Redshift Serverless workgroup. |

---

##### `WorkgroupName`<sup>Optional</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.property.workgroupName"></a>

```go
WorkgroupName *string
```

- *Type:* *string

The name of the Amazon Redshift Serverless workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#workgroup_name DatazoneDataSource#workgroup_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations {
	DatabaseName: *string,
	FilterExpressions: interface{},
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The database name specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.filterExpressions">FilterExpressions</a></code> | <code>interface{}</code> | The filter expressions specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.schemaName">SchemaName</a></code> | <code>*string</code> | The schema name specified in the relational filter configuration for the data source. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The database name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#database_name DatazoneDataSource#database_name}

---

##### `FilterExpressions`<sup>Optional</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.filterExpressions"></a>

```go
FilterExpressions interface{}
```

- *Type:* interface{}

The filter expressions specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#filter_expressions DatazoneDataSource#filter_expressions}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The schema name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#schema_name DatazoneDataSource#schema_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions {
	Expression: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type">Type</a></code> | <code>*string</code> | The search filter expression type. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type"></a>

```go
Type *string
```

- *Type:* *string

The search filter expression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

### DatazoneDataSourceConfigurationSageMakerRunConfiguration <a name="DatazoneDataSourceConfigurationSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceConfigurationSageMakerRunConfiguration {
	TrackingAssets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.property.trackingAssets">TrackingAssets</a></code> | <code>interface{}</code> | The tracking assets of the Amazon SageMaker run. |

---

##### `TrackingAssets`<sup>Optional</sup> <a name="TrackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.property.trackingAssets"></a>

```go
TrackingAssets interface{}
```

- *Type:* interface{}

The tracking assets of the Amazon SageMaker run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#tracking_assets DatazoneDataSource#tracking_assets}

---

### DatazoneDataSourceRecommendation <a name="DatazoneDataSourceRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceRecommendation {
	EnableBusinessNameGeneration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.property.enableBusinessNameGeneration">EnableBusinessNameGeneration</a></code> | <code>interface{}</code> | Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration. |

---

##### `EnableBusinessNameGeneration`<sup>Optional</sup> <a name="EnableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.property.enableBusinessNameGeneration"></a>

```go
EnableBusinessNameGeneration interface{}
```

- *Type:* interface{}

Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#enable_business_name_generation DatazoneDataSource#enable_business_name_generation}

---

### DatazoneDataSourceSchedule <a name="DatazoneDataSourceSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

&datazonedatasource.DatazoneDataSourceSchedule {
	Schedule: *string,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.schedule">Schedule</a></code> | <code>*string</code> | The schedule of the data source runs. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.timezone">Timezone</a></code> | <code>*string</code> | The timezone of the data source run. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

The timezone of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#timezone DatazoneDataSource#timezone}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneDataSourceAssetFormsInputList <a name="DatazoneDataSourceAssetFormsInputList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceAssetFormsInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneDataSourceAssetFormsInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get"></a>

```go
func Get(index *f64) DatazoneDataSourceAssetFormsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceAssetFormsInputOutputReference <a name="DatazoneDataSourceAssetFormsInputOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceAssetFormsInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneDataSourceAssetFormsInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetFormName">ResetFormName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeIdentifier">ResetTypeIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeRevision">ResetTypeRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetFormName` <a name="ResetFormName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetFormName"></a>

```go
func ResetFormName()
```

##### `ResetTypeIdentifier` <a name="ResetTypeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeIdentifier"></a>

```go
func ResetTypeIdentifier()
```

##### `ResetTypeRevision` <a name="ResetTypeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeRevision"></a>

```go
func ResetTypeRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formNameInput">FormNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifierInput">TypeIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevisionInput">TypeRevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formName">FormName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier">TypeIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision">TypeRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FormNameInput`<sup>Optional</sup> <a name="FormNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formNameInput"></a>

```go
func FormNameInput() *string
```

- *Type:* *string

---

##### `TypeIdentifierInput`<sup>Optional</sup> <a name="TypeIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifierInput"></a>

```go
func TypeIdentifierInput() *string
```

- *Type:* *string

---

##### `TypeRevisionInput`<sup>Optional</sup> <a name="TypeRevisionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevisionInput"></a>

```go
func TypeRevisionInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FormName`<sup>Required</sup> <a name="FormName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formName"></a>

```go
func FormName() *string
```

- *Type:* *string

---

##### `TypeIdentifier`<sup>Required</sup> <a name="TypeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier"></a>

```go
func TypeIdentifier() *string
```

- *Type:* *string

---

##### `TypeRevision`<sup>Required</sup> <a name="TypeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision"></a>

```go
func TypeRevision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations">PutRelationalFilterConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetAutoImportDataQualityResult">ResetAutoImportDataQualityResult</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetDataAccessRole">ResetDataAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetRelationalFilterConfigurations">ResetRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRelationalFilterConfigurations` <a name="PutRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations"></a>

```go
func PutRelationalFilterConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoImportDataQualityResult` <a name="ResetAutoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetAutoImportDataQualityResult"></a>

```go
func ResetAutoImportDataQualityResult()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetDataAccessRole` <a name="ResetDataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetDataAccessRole"></a>

```go
func ResetDataAccessRole()
```

##### `ResetRelationalFilterConfigurations` <a name="ResetRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetRelationalFilterConfigurations"></a>

```go
func ResetRelationalFilterConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResultInput">AutoImportDataQualityResultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRoleInput">DataAccessRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurationsInput">RelationalFilterConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult">AutoImportDataQualityResult</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole">DataAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelationalFilterConfigurations`<sup>Required</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```go
func RelationalFilterConfigurations() DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `AutoImportDataQualityResultInput`<sup>Optional</sup> <a name="AutoImportDataQualityResultInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResultInput"></a>

```go
func AutoImportDataQualityResultInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `DataAccessRoleInput`<sup>Optional</sup> <a name="DataAccessRoleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRoleInput"></a>

```go
func DataAccessRoleInput() *string
```

- *Type:* *string

---

##### `RelationalFilterConfigurationsInput`<sup>Optional</sup> <a name="RelationalFilterConfigurationsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurationsInput"></a>

```go
func RelationalFilterConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoImportDataQualityResult`<sup>Required</sup> <a name="AutoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult"></a>

```go
func AutoImportDataQualityResult() interface{}
```

- *Type:* interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `DataAccessRole`<sup>Required</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole"></a>

```go
func DataAccessRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```go
func Get(index *f64) DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get"></a>

```go
func Get(index *f64) DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions">PutFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions">ResetFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterExpressions` <a name="PutFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions"></a>

```go
func PutFilterExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetFilterExpressions` <a name="ResetFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions"></a>

```go
func ResetFilterExpressions()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">FilterExpressions</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput">FilterExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterExpressions`<sup>Required</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```go
func FilterExpressions() DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `FilterExpressionsInput`<sup>Optional</sup> <a name="FilterExpressionsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput"></a>

```go
func FilterExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationOutputReference <a name="DatazoneDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration">PutGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration">PutRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration">PutSageMakerRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetGlueRunConfiguration">ResetGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetRedshiftRunConfiguration">ResetRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetSageMakerRunConfiguration">ResetSageMakerRunConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueRunConfiguration` <a name="PutGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration"></a>

```go
func PutGlueRunConfiguration(value DatazoneDataSourceConfigurationGlueRunConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---

##### `PutRedshiftRunConfiguration` <a name="PutRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration"></a>

```go
func PutRedshiftRunConfiguration(value DatazoneDataSourceConfigurationRedshiftRunConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---

##### `PutSageMakerRunConfiguration` <a name="PutSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration"></a>

```go
func PutSageMakerRunConfiguration(value DatazoneDataSourceConfigurationSageMakerRunConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---

##### `ResetGlueRunConfiguration` <a name="ResetGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetGlueRunConfiguration"></a>

```go
func ResetGlueRunConfiguration()
```

##### `ResetRedshiftRunConfiguration` <a name="ResetRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetRedshiftRunConfiguration"></a>

```go
func ResetRedshiftRunConfiguration()
```

##### `ResetSageMakerRunConfiguration` <a name="ResetSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetSageMakerRunConfiguration"></a>

```go
func ResetSageMakerRunConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration">GlueRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration">RedshiftRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration">SageMakerRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfigurationInput">GlueRunConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfigurationInput">RedshiftRunConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfigurationInput">SageMakerRunConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueRunConfiguration`<sup>Required</sup> <a name="GlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration"></a>

```go
func GlueRunConfiguration() DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a>

---

##### `RedshiftRunConfiguration`<sup>Required</sup> <a name="RedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration"></a>

```go
func RedshiftRunConfiguration() DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a>

---

##### `SageMakerRunConfiguration`<sup>Required</sup> <a name="SageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration"></a>

```go
func SageMakerRunConfiguration() DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a>

---

##### `GlueRunConfigurationInput`<sup>Optional</sup> <a name="GlueRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfigurationInput"></a>

```go
func GlueRunConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftRunConfigurationInput`<sup>Optional</sup> <a name="RedshiftRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfigurationInput"></a>

```go
func RedshiftRunConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SageMakerRunConfigurationInput`<sup>Optional</sup> <a name="SageMakerRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfigurationInput"></a>

```go
func SageMakerRunConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration">PutRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage">PutRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations">PutRelationalFilterConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetDataAccessRole">ResetDataAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftCredentialConfiguration">ResetRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftStorage">ResetRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRelationalFilterConfigurations">ResetRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRedshiftCredentialConfiguration` <a name="PutRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration"></a>

```go
func PutRedshiftCredentialConfiguration(value DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---

##### `PutRedshiftStorage` <a name="PutRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage"></a>

```go
func PutRedshiftStorage(value DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---

##### `PutRelationalFilterConfigurations` <a name="PutRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations"></a>

```go
func PutRelationalFilterConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataAccessRole` <a name="ResetDataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetDataAccessRole"></a>

```go
func ResetDataAccessRole()
```

##### `ResetRedshiftCredentialConfiguration` <a name="ResetRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftCredentialConfiguration"></a>

```go
func ResetRedshiftCredentialConfiguration()
```

##### `ResetRedshiftStorage` <a name="ResetRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftStorage"></a>

```go
func ResetRedshiftStorage()
```

##### `ResetRelationalFilterConfigurations` <a name="ResetRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRelationalFilterConfigurations"></a>

```go
func ResetRelationalFilterConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration">RedshiftCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage">RedshiftStorage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations">RelationalFilterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRoleInput">DataAccessRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfigurationInput">RedshiftCredentialConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorageInput">RedshiftStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurationsInput">RelationalFilterConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole">DataAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedshiftCredentialConfiguration`<sup>Required</sup> <a name="RedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration"></a>

```go
func RedshiftCredentialConfiguration() DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a>

---

##### `RedshiftStorage`<sup>Required</sup> <a name="RedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage"></a>

```go
func RedshiftStorage() DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a>

---

##### `RelationalFilterConfigurations`<sup>Required</sup> <a name="RelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```go
func RelationalFilterConfigurations() DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `DataAccessRoleInput`<sup>Optional</sup> <a name="DataAccessRoleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRoleInput"></a>

```go
func DataAccessRoleInput() *string
```

- *Type:* *string

---

##### `RedshiftCredentialConfigurationInput`<sup>Optional</sup> <a name="RedshiftCredentialConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfigurationInput"></a>

```go
func RedshiftCredentialConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftStorageInput`<sup>Optional</sup> <a name="RedshiftStorageInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorageInput"></a>

```go
func RedshiftStorageInput() interface{}
```

- *Type:* interface{}

---

##### `RelationalFilterConfigurationsInput`<sup>Optional</sup> <a name="RelationalFilterConfigurationsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurationsInput"></a>

```go
func RelationalFilterConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `DataAccessRole`<sup>Required</sup> <a name="DataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole"></a>

```go
func DataAccessRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resetSecretManagerArn">ResetSecretManagerArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretManagerArn` <a name="ResetSecretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resetSecretManagerArn"></a>

```go
func ResetSecretManagerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArnInput">SecretManagerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn">SecretManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretManagerArnInput`<sup>Optional</sup> <a name="SecretManagerArnInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArnInput"></a>

```go
func SecretManagerArnInput() *string
```

- *Type:* *string

---

##### `SecretManagerArn`<sup>Required</sup> <a name="SecretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn"></a>

```go
func SecretManagerArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource">PutRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource">PutRedshiftServerlessSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftClusterSource">ResetRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftServerlessSource">ResetRedshiftServerlessSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRedshiftClusterSource` <a name="PutRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource"></a>

```go
func PutRedshiftClusterSource(value DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---

##### `PutRedshiftServerlessSource` <a name="PutRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource"></a>

```go
func PutRedshiftServerlessSource(value DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---

##### `ResetRedshiftClusterSource` <a name="ResetRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftClusterSource"></a>

```go
func ResetRedshiftClusterSource()
```

##### `ResetRedshiftServerlessSource` <a name="ResetRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftServerlessSource"></a>

```go
func ResetRedshiftServerlessSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource">RedshiftClusterSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource">RedshiftServerlessSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSourceInput">RedshiftClusterSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSourceInput">RedshiftServerlessSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedshiftClusterSource`<sup>Required</sup> <a name="RedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource"></a>

```go
func RedshiftClusterSource() DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a>

---

##### `RedshiftServerlessSource`<sup>Required</sup> <a name="RedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource"></a>

```go
func RedshiftServerlessSource() DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a>

---

##### `RedshiftClusterSourceInput`<sup>Optional</sup> <a name="RedshiftClusterSourceInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSourceInput"></a>

```go
func RedshiftClusterSourceInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftServerlessSourceInput`<sup>Optional</sup> <a name="RedshiftServerlessSourceInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSourceInput"></a>

```go
func RedshiftServerlessSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resetWorkgroupName">ResetWorkgroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkgroupName` <a name="ResetWorkgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resetWorkgroupName"></a>

```go
func ResetWorkgroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupNameInput"></a>

```go
func WorkgroupNameInput() *string
```

- *Type:* *string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName"></a>

```go
func WorkgroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```go
func Get(index *f64) DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get"></a>

```go
func Get(index *f64) DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions">PutFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions">ResetFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterExpressions` <a name="PutFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions"></a>

```go
func PutFilterExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetFilterExpressions` <a name="ResetFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions"></a>

```go
func ResetFilterExpressions()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">FilterExpressions</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput">FilterExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterExpressions`<sup>Required</sup> <a name="FilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```go
func FilterExpressions() DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `FilterExpressionsInput`<sup>Optional</sup> <a name="FilterExpressionsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput"></a>

```go
func FilterExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resetTrackingAssets">ResetTrackingAssets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTrackingAssets` <a name="ResetTrackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resetTrackingAssets"></a>

```go
func ResetTrackingAssets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssetsInput">TrackingAssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets">TrackingAssets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrackingAssetsInput`<sup>Optional</sup> <a name="TrackingAssetsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssetsInput"></a>

```go
func TrackingAssetsInput() interface{}
```

- *Type:* interface{}

---

##### `TrackingAssets`<sup>Required</sup> <a name="TrackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets"></a>

```go
func TrackingAssets() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceRecommendationOutputReference <a name="DatazoneDataSourceRecommendationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceRecommendationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceRecommendationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resetEnableBusinessNameGeneration">ResetEnableBusinessNameGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableBusinessNameGeneration` <a name="ResetEnableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resetEnableBusinessNameGeneration"></a>

```go
func ResetEnableBusinessNameGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGenerationInput">EnableBusinessNameGenerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration">EnableBusinessNameGeneration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableBusinessNameGenerationInput`<sup>Optional</sup> <a name="EnableBusinessNameGenerationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGenerationInput"></a>

```go
func EnableBusinessNameGenerationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableBusinessNameGeneration`<sup>Required</sup> <a name="EnableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration"></a>

```go
func EnableBusinessNameGeneration() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDataSourceScheduleOutputReference <a name="DatazoneDataSourceScheduleOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedatasource"

datazonedatasource.NewDatazoneDataSourceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDataSourceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



