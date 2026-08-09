# `locationTracker` Submodule <a name="`locationTracker` Submodule" id="@cdktn/provider-awscc.locationTracker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationTracker <a name="LocationTracker" id="@cdktn/provider-awscc.locationTracker.LocationTracker"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker awscc_location_tracker}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

locationtracker.NewLocationTracker(scope Construct, id *string, config LocationTrackerConfig) LocationTracker
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig">LocationTrackerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.locationTracker.LocationTracker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig">LocationTrackerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetEventBridgeEnabled">ResetEventBridgeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetKmsKeyEnableGeospatialQueries">ResetKmsKeyEnableGeospatialQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetPositionFiltering">ResetPositionFiltering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetPricingPlan">ResetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetPricingPlanDataSource">ResetPricingPlanDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationTracker.LocationTracker.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.locationTracker.LocationTracker.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.locationTracker.LocationTracker.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.locationTracker.LocationTracker.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.locationTracker.LocationTracker.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.locationTracker.LocationTracker.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.locationTracker.LocationTracker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.locationTracker.LocationTracker.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.locationTracker.LocationTracker.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationTracker.LocationTracker.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTracker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.locationTracker.LocationTracker.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.locationTracker.LocationTracker.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventBridgeEnabled` <a name="ResetEventBridgeEnabled" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetEventBridgeEnabled"></a>

```go
func ResetEventBridgeEnabled()
```

##### `ResetKmsKeyEnableGeospatialQueries` <a name="ResetKmsKeyEnableGeospatialQueries" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetKmsKeyEnableGeospatialQueries"></a>

```go
func ResetKmsKeyEnableGeospatialQueries()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPositionFiltering` <a name="ResetPositionFiltering" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetPositionFiltering"></a>

```go
func ResetPositionFiltering()
```

##### `ResetPricingPlan` <a name="ResetPricingPlan" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetPricingPlan"></a>

```go
func ResetPricingPlan()
```

##### `ResetPricingPlanDataSource` <a name="ResetPricingPlanDataSource" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetPricingPlanDataSource"></a>

```go
func ResetPricingPlanDataSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.locationTracker.LocationTracker.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LocationTracker resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

locationtracker.LocationTracker_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

locationtracker.LocationTracker_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

locationtracker.LocationTracker_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.locationTracker.LocationTracker.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

locationtracker.LocationTracker_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LocationTracker resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LocationTracker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LocationTracker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.locationTracker.LocationTracker.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LocationTracker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList">LocationTrackerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerArn">TrackerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.eventBridgeEnabledInput">EventBridgeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyEnableGeospatialQueriesInput">KmsKeyEnableGeospatialQueriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.positionFilteringInput">PositionFilteringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanDataSourceInput">PricingPlanDataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanInput">PricingPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerNameInput">TrackerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.eventBridgeEnabled">EventBridgeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyEnableGeospatialQueries">KmsKeyEnableGeospatialQueries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.positionFiltering">PositionFiltering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanDataSource">PricingPlanDataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerName">TrackerName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.tags"></a>

```go
func Tags() LocationTrackerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList">LocationTrackerTagsList</a>

---

##### `TrackerArn`<sup>Required</sup> <a name="TrackerArn" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerArn"></a>

```go
func TrackerArn() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventBridgeEnabledInput`<sup>Optional</sup> <a name="EventBridgeEnabledInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.eventBridgeEnabledInput"></a>

```go
func EventBridgeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyEnableGeospatialQueriesInput`<sup>Optional</sup> <a name="KmsKeyEnableGeospatialQueriesInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyEnableGeospatialQueriesInput"></a>

```go
func KmsKeyEnableGeospatialQueriesInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PositionFilteringInput`<sup>Optional</sup> <a name="PositionFilteringInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.positionFilteringInput"></a>

```go
func PositionFilteringInput() *string
```

- *Type:* *string

---

##### `PricingPlanDataSourceInput`<sup>Optional</sup> <a name="PricingPlanDataSourceInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanDataSourceInput"></a>

```go
func PricingPlanDataSourceInput() *string
```

- *Type:* *string

---

##### `PricingPlanInput`<sup>Optional</sup> <a name="PricingPlanInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanInput"></a>

```go
func PricingPlanInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrackerNameInput`<sup>Optional</sup> <a name="TrackerNameInput" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerNameInput"></a>

```go
func TrackerNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventBridgeEnabled`<sup>Required</sup> <a name="EventBridgeEnabled" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.eventBridgeEnabled"></a>

```go
func EventBridgeEnabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyEnableGeospatialQueries`<sup>Required</sup> <a name="KmsKeyEnableGeospatialQueries" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyEnableGeospatialQueries"></a>

```go
func KmsKeyEnableGeospatialQueries() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PositionFiltering`<sup>Required</sup> <a name="PositionFiltering" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.positionFiltering"></a>

```go
func PositionFiltering() *string
```

- *Type:* *string

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlan"></a>

```go
func PricingPlan() *string
```

- *Type:* *string

---

##### `PricingPlanDataSource`<sup>Required</sup> <a name="PricingPlanDataSource" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.pricingPlanDataSource"></a>

```go
func PricingPlanDataSource() *string
```

- *Type:* *string

---

##### `TrackerName`<sup>Required</sup> <a name="TrackerName" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.trackerName"></a>

```go
func TrackerName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTracker.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.locationTracker.LocationTracker.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LocationTrackerConfig <a name="LocationTrackerConfig" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

&locationtracker.LocationTrackerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TrackerName: *string,
	Description: *string,
	EventBridgeEnabled: interface{},
	KmsKeyEnableGeospatialQueries: interface{},
	KmsKeyId: *string,
	PositionFiltering: *string,
	PricingPlan: *string,
	PricingPlanDataSource: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.trackerName">TrackerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#tracker_name LocationTracker#tracker_name}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#description LocationTracker#description}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.eventBridgeEnabled">EventBridgeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#event_bridge_enabled LocationTracker#event_bridge_enabled}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.kmsKeyEnableGeospatialQueries">KmsKeyEnableGeospatialQueries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#kms_key_enable_geospatial_queries LocationTracker#kms_key_enable_geospatial_queries}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#kms_key_id LocationTracker#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.positionFiltering">PositionFiltering</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#position_filtering LocationTracker#position_filtering}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#pricing_plan LocationTracker#pricing_plan}. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.pricingPlanDataSource">PricingPlanDataSource</a></code> | <code>*string</code> | This shape is deprecated since 2022-02-01: Deprecated. No longer allowed. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TrackerName`<sup>Required</sup> <a name="TrackerName" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.trackerName"></a>

```go
TrackerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#tracker_name LocationTracker#tracker_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#description LocationTracker#description}.

---

##### `EventBridgeEnabled`<sup>Optional</sup> <a name="EventBridgeEnabled" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.eventBridgeEnabled"></a>

```go
EventBridgeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#event_bridge_enabled LocationTracker#event_bridge_enabled}.

---

##### `KmsKeyEnableGeospatialQueries`<sup>Optional</sup> <a name="KmsKeyEnableGeospatialQueries" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.kmsKeyEnableGeospatialQueries"></a>

```go
KmsKeyEnableGeospatialQueries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#kms_key_enable_geospatial_queries LocationTracker#kms_key_enable_geospatial_queries}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#kms_key_id LocationTracker#kms_key_id}.

---

##### `PositionFiltering`<sup>Optional</sup> <a name="PositionFiltering" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.positionFiltering"></a>

```go
PositionFiltering *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#position_filtering LocationTracker#position_filtering}.

---

##### `PricingPlan`<sup>Optional</sup> <a name="PricingPlan" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.pricingPlan"></a>

```go
PricingPlan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#pricing_plan LocationTracker#pricing_plan}.

---

##### `PricingPlanDataSource`<sup>Optional</sup> <a name="PricingPlanDataSource" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.pricingPlanDataSource"></a>

```go
PricingPlanDataSource *string
```

- *Type:* *string

This shape is deprecated since 2022-02-01: Deprecated. No longer allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#pricing_plan_data_source LocationTracker#pricing_plan_data_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.locationTracker.LocationTrackerConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#tags LocationTracker#tags}

---

### LocationTrackerTags <a name="LocationTrackerTags" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

&locationtracker.LocationTrackerTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#key LocationTracker#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/location_tracker#value LocationTracker#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LocationTrackerTagsList <a name="LocationTrackerTagsList" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

locationtracker.NewLocationTrackerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LocationTrackerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.get"></a>

```go
func Get(index *f64) LocationTrackerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LocationTrackerTagsOutputReference <a name="LocationTrackerTagsOutputReference" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/locationtracker"

locationtracker.NewLocationTrackerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LocationTrackerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.locationTracker.LocationTrackerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



