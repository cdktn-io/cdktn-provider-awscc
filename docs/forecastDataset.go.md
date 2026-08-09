# `forecastDataset` Submodule <a name="`forecastDataset` Submodule" id="@cdktn/provider-awscc.forecastDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ForecastDataset <a name="ForecastDataset" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset awscc_forecast_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.NewForecastDataset(scope Construct, id *string, config ForecastDatasetConfig) ForecastDataset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig">ForecastDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig">ForecastDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.resetDataFrequency">ResetDataFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value ForecastDatasetEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig">ForecastDatasetEncryptionConfig</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.putSchema"></a>

```go
func PutSchema(value ForecastDatasetSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchema">ForecastDatasetSchema</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataFrequency` <a name="ResetDataFrequency" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.resetDataFrequency"></a>

```go
func ResetDataFrequency()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ForecastDataset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.ForecastDataset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.ForecastDataset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.ForecastDataset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.ForecastDataset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ForecastDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ForecastDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ForecastDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ForecastDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference">ForecastDatasetEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference">ForecastDatasetSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList">ForecastDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.dataFrequencyInput">DataFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.datasetNameInput">DatasetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.dataFrequency">DataFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.datasetName">DatasetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.datasetType">DatasetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.encryptionConfig"></a>

```go
func EncryptionConfig() ForecastDatasetEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference">ForecastDatasetEncryptionConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.schema"></a>

```go
func Schema() ForecastDatasetSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference">ForecastDatasetSchemaOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.tags"></a>

```go
func Tags() ForecastDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList">ForecastDatasetTagsList</a>

---

##### `DataFrequencyInput`<sup>Optional</sup> <a name="DataFrequencyInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.dataFrequencyInput"></a>

```go
func DataFrequencyInput() *string
```

- *Type:* *string

---

##### `DatasetNameInput`<sup>Optional</sup> <a name="DatasetNameInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.datasetNameInput"></a>

```go
func DatasetNameInput() *string
```

- *Type:* *string

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.datasetTypeInput"></a>

```go
func DatasetTypeInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DataFrequency`<sup>Required</sup> <a name="DataFrequency" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.dataFrequency"></a>

```go
func DataFrequency() *string
```

- *Type:* *string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.datasetName"></a>

```go
func DatasetName() *string
```

- *Type:* *string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.datasetType"></a>

```go
func DatasetType() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.forecastDataset.ForecastDataset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ForecastDatasetConfig <a name="ForecastDatasetConfig" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

&forecastdataset.ForecastDatasetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetName: *string,
	DatasetType: *string,
	Domain: *string,
	Schema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.forecastDataset.ForecastDatasetSchema,
	DataFrequency: *string,
	EncryptionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.forecastDataset.ForecastDatasetEncryptionConfig,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.datasetName">DatasetName</a></code> | <code>*string</code> | A name for the dataset. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.datasetType">DatasetType</a></code> | <code>*string</code> | The dataset type. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.domain">Domain</a></code> | <code>*string</code> | The domain associated with the dataset. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchema">ForecastDatasetSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#schema ForecastDataset#schema}. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.dataFrequency">DataFrequency</a></code> | <code>*string</code> | Frequency of data collection. This parameter is required for RELATED_TIME_SERIES. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig">ForecastDatasetEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#encryption_config ForecastDataset#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#tags ForecastDataset#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.datasetName"></a>

```go
DatasetName *string
```

- *Type:* *string

A name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#dataset_name ForecastDataset#dataset_name}

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.datasetType"></a>

```go
DatasetType *string
```

- *Type:* *string

The dataset type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#dataset_type ForecastDataset#dataset_type}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The domain associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#domain ForecastDataset#domain}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.schema"></a>

```go
Schema ForecastDatasetSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchema">ForecastDatasetSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#schema ForecastDataset#schema}.

---

##### `DataFrequency`<sup>Optional</sup> <a name="DataFrequency" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.dataFrequency"></a>

```go
DataFrequency *string
```

- *Type:* *string

Frequency of data collection. This parameter is required for RELATED_TIME_SERIES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#data_frequency ForecastDataset#data_frequency}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.encryptionConfig"></a>

```go
EncryptionConfig ForecastDatasetEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig">ForecastDatasetEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#encryption_config ForecastDataset#encryption_config}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#tags ForecastDataset#tags}.

---

### ForecastDatasetEncryptionConfig <a name="ForecastDatasetEncryptionConfig" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

&forecastdataset.ForecastDatasetEncryptionConfig {
	KmsKeyArn: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | KMS key used to encrypt the Dataset data. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

KMS key used to encrypt the Dataset data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#kms_key_arn ForecastDataset#kms_key_arn}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#role_arn ForecastDataset#role_arn}

---

### ForecastDatasetSchema <a name="ForecastDatasetSchema" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

&forecastdataset.ForecastDatasetSchema {
	Attributes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchema.property.attributes">Attributes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#attributes ForecastDataset#attributes}. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchema.property.attributes"></a>

```go
Attributes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#attributes ForecastDataset#attributes}.

---

### ForecastDatasetSchemaAttributes <a name="ForecastDatasetSchemaAttributes" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

&forecastdataset.ForecastDatasetSchemaAttributes {
	AttributeName: *string,
	AttributeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributes.property.attributeName">AttributeName</a></code> | <code>*string</code> | Name of the dataset field. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributes.property.attributeType">AttributeType</a></code> | <code>*string</code> | Data type of the field. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributes.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

Name of the dataset field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#attribute_name ForecastDataset#attribute_name}

---

##### `AttributeType`<sup>Optional</sup> <a name="AttributeType" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributes.property.attributeType"></a>

```go
AttributeType *string
```

- *Type:* *string

Data type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#attribute_type ForecastDataset#attribute_type}

---

### ForecastDatasetTags <a name="ForecastDatasetTags" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

&forecastdataset.ForecastDatasetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#key ForecastDataset#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/forecast_dataset#value ForecastDataset#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ForecastDatasetEncryptionConfigOutputReference <a name="ForecastDatasetEncryptionConfigOutputReference" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.NewForecastDatasetEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ForecastDatasetEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ForecastDatasetSchemaAttributesList <a name="ForecastDatasetSchemaAttributesList" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.NewForecastDatasetSchemaAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ForecastDatasetSchemaAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.get"></a>

```go
func Get(index *f64) ForecastDatasetSchemaAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ForecastDatasetSchemaAttributesOutputReference <a name="ForecastDatasetSchemaAttributesOutputReference" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.NewForecastDatasetSchemaAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ForecastDatasetSchemaAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.resetAttributeType">ResetAttributeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.resetAttributeName"></a>

```go
func ResetAttributeName()
```

##### `ResetAttributeType` <a name="ResetAttributeType" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.resetAttributeType"></a>

```go
func ResetAttributeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.attributeTypeInput">AttributeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.attributeType">AttributeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `AttributeTypeInput`<sup>Optional</sup> <a name="AttributeTypeInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.attributeTypeInput"></a>

```go
func AttributeTypeInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.attributeType"></a>

```go
func AttributeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ForecastDatasetSchemaOutputReference <a name="ForecastDatasetSchemaOutputReference" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.NewForecastDatasetSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ForecastDatasetSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.putAttributes"></a>

```go
func PutAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.putAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList">ForecastDatasetSchemaAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.attributes"></a>

```go
func Attributes() ForecastDatasetSchemaAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaAttributesList">ForecastDatasetSchemaAttributesList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ForecastDatasetTagsList <a name="ForecastDatasetTagsList" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.NewForecastDatasetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ForecastDatasetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.get"></a>

```go
func Get(index *f64) ForecastDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ForecastDatasetTagsOutputReference <a name="ForecastDatasetTagsOutputReference" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/forecastdataset"

forecastdataset.NewForecastDatasetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ForecastDatasetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.forecastDataset.ForecastDatasetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



