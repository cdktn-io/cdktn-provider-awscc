# `evidentlyFeature` Submodule <a name="`evidentlyFeature` Submodule" id="@cdktn/provider-awscc.evidentlyFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyFeature <a name="EvidentlyFeature" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature awscc_evidently_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeature(scope Construct, id *string, config EvidentlyFeatureConfig) EvidentlyFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig">EvidentlyFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig">EvidentlyFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides">PutEntityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations">PutVariations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDefaultVariation">ResetDefaultVariation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEntityOverrides">ResetEntityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy">ResetEvaluationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityOverrides` <a name="PutEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides"></a>

```go
func PutEntityOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putEntityOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVariations` <a name="PutVariations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations"></a>

```go
func PutVariations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.putVariations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultVariation` <a name="ResetDefaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDefaultVariation"></a>

```go
func ResetDefaultVariation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEntityOverrides` <a name="ResetEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEntityOverrides"></a>

```go
func ResetEntityOverrides()
```

##### `ResetEvaluationStrategy` <a name="ResetEvaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy"></a>

```go
func ResetEvaluationStrategy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EvidentlyFeature resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.EvidentlyFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.EvidentlyFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.EvidentlyFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.EvidentlyFeature_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EvidentlyFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EvidentlyFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EvidentlyFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverrides">EntityOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList">EvidentlyFeatureEntityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList">EvidentlyFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variations">Variations</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput">DefaultVariationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput">EntityOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput">EvaluationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variationsInput">VariationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariation">DefaultVariation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy">EvaluationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EntityOverrides`<sup>Required</sup> <a name="EntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverrides"></a>

```go
func EntityOverrides() EvidentlyFeatureEntityOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList">EvidentlyFeatureEntityOverridesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tags"></a>

```go
func Tags() EvidentlyFeatureTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList">EvidentlyFeatureTagsList</a>

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variations"></a>

```go
func Variations() EvidentlyFeatureVariationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a>

---

##### `DefaultVariationInput`<sup>Optional</sup> <a name="DefaultVariationInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput"></a>

```go
func DefaultVariationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntityOverridesInput`<sup>Optional</sup> <a name="EntityOverridesInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput"></a>

```go
func EntityOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationStrategyInput`<sup>Optional</sup> <a name="EvaluationStrategyInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput"></a>

```go
func EvaluationStrategyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VariationsInput`<sup>Optional</sup> <a name="VariationsInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.variationsInput"></a>

```go
func VariationsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultVariation`<sup>Required</sup> <a name="DefaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.defaultVariation"></a>

```go
func DefaultVariation() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EvaluationStrategy`<sup>Required</sup> <a name="EvaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy"></a>

```go
func EvaluationStrategy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyFeatureConfig <a name="EvidentlyFeatureConfig" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Project: *string,
	Variations: interface{},
	DefaultVariation: *string,
	Description: *string,
	EntityOverrides: interface{},
	EvaluationStrategy: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#project EvidentlyFeature#project}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.variations">Variations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variations EvidentlyFeature#variations}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation">DefaultVariation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#default_variation EvidentlyFeature#default_variation}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#description EvidentlyFeature#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides">EntityOverrides</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy">EvaluationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#name EvidentlyFeature#name}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#project EvidentlyFeature#project}.

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.variations"></a>

```go
Variations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variations EvidentlyFeature#variations}.

---

##### `DefaultVariation`<sup>Optional</sup> <a name="DefaultVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation"></a>

```go
DefaultVariation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#default_variation EvidentlyFeature#default_variation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#description EvidentlyFeature#description}.

---

##### `EntityOverrides`<sup>Optional</sup> <a name="EntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides"></a>

```go
EntityOverrides interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}.

---

##### `EvaluationStrategy`<sup>Optional</sup> <a name="EvaluationStrategy" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy"></a>

```go
EvaluationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#tags EvidentlyFeature#tags}

---

### EvidentlyFeatureEntityOverrides <a name="EvidentlyFeatureEntityOverrides" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureEntityOverrides {
	EntityId: *string,
	Variation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#entity_id EvidentlyFeature#entity_id}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.variation">Variation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variation EvidentlyFeature#variation}. |

---

##### `EntityId`<sup>Optional</sup> <a name="EntityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#entity_id EvidentlyFeature#entity_id}.

---

##### `Variation`<sup>Optional</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverrides.property.variation"></a>

```go
Variation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variation EvidentlyFeature#variation}.

---

### EvidentlyFeatureTags <a name="EvidentlyFeatureTags" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#key EvidentlyFeature#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#value EvidentlyFeature#value}

---

### EvidentlyFeatureVariations <a name="EvidentlyFeatureVariations" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureVariations {
	BooleanValue: interface{},
	DoubleValue: *f64,
	LongValue: *f64,
	StringValue: *string,
	VariationName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.booleanValue">BooleanValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#boolean_value EvidentlyFeature#boolean_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#double_value EvidentlyFeature#double_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.longValue">LongValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#long_value EvidentlyFeature#long_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#string_value EvidentlyFeature#string_value}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.variationName">VariationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variation_name EvidentlyFeature#variation_name}. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.booleanValue"></a>

```go
BooleanValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#boolean_value EvidentlyFeature#boolean_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.doubleValue"></a>

```go
DoubleValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#double_value EvidentlyFeature#double_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.longValue"></a>

```go
LongValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#long_value EvidentlyFeature#long_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#string_value EvidentlyFeature#string_value}.

---

##### `VariationName`<sup>Optional</sup> <a name="VariationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariations.property.variationName"></a>

```go
VariationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_feature#variation_name EvidentlyFeature#variation_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyFeatureEntityOverridesList <a name="EvidentlyFeatureEntityOverridesList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureEntityOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyFeatureEntityOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get"></a>

```go
func Get(index *f64) EvidentlyFeatureEntityOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyFeatureEntityOverridesOutputReference <a name="EvidentlyFeatureEntityOverridesOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureEntityOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyFeatureEntityOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetEntityId">ResetEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetVariation">ResetVariation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityId` <a name="ResetEntityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetEntityId"></a>

```go
func ResetEntityId()
```

##### `ResetVariation` <a name="ResetVariation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.resetVariation"></a>

```go
func ResetVariation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variationInput">VariationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variation">Variation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `VariationInput`<sup>Optional</sup> <a name="VariationInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variationInput"></a>

```go
func VariationInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `Variation`<sup>Required</sup> <a name="Variation" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.variation"></a>

```go
func Variation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureEntityOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyFeatureTagsList <a name="EvidentlyFeatureTagsList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyFeatureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get"></a>

```go
func Get(index *f64) EvidentlyFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyFeatureTagsOutputReference <a name="EvidentlyFeatureTagsOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyFeatureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyFeatureVariationsList <a name="EvidentlyFeatureVariationsList" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureVariationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyFeatureVariationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get"></a>

```go
func Get(index *f64) EvidentlyFeatureVariationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyFeatureVariationsOutputReference <a name="EvidentlyFeatureVariationsOutputReference" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureVariationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyFeatureVariationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetVariationName">ResetVariationName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetBooleanValue"></a>

```go
func ResetBooleanValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetLongValue"></a>

```go
func ResetLongValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```

##### `ResetVariationName` <a name="ResetVariationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resetVariationName"></a>

```go
func ResetVariationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValueInput">LongValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationNameInput">VariationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValue">BooleanValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValue">LongValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationName">VariationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValueInput"></a>

```go
func BooleanValueInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *f64
```

- *Type:* *f64

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValueInput"></a>

```go
func LongValueInput() *f64
```

- *Type:* *f64

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `VariationNameInput`<sup>Optional</sup> <a name="VariationNameInput" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationNameInput"></a>

```go
func VariationNameInput() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.booleanValue"></a>

```go
func BooleanValue() interface{}
```

- *Type:* interface{}

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *f64
```

- *Type:* *f64

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.longValue"></a>

```go
func LongValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `VariationName`<sup>Required</sup> <a name="VariationName" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.variationName"></a>

```go
func VariationName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



