# `wellarchitectedWorkload` Submodule <a name="`wellarchitectedWorkload` Submodule" id="@cdktn/provider-awscc.wellarchitectedWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedWorkload <a name="WellarchitectedWorkload" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload awscc_wellarchitected_workload}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

wellarchitectedworkload.NewWellarchitectedWorkload(scope Construct, id *string, config WellarchitectedWorkloadConfig) WellarchitectedWorkload
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig">WellarchitectedWorkloadConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig">WellarchitectedWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig">PutDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign">ResetArchitecturalDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions">ResetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig">ResetDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry">ResetIndustry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType">ResetIndustryType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions">ResetNonAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner">ResetReviewOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiscoveryConfig` <a name="PutDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig"></a>

```go
func PutDiscoveryConfig(value WellarchitectedWorkloadDiscoveryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds"></a>

```go
func ResetAccountIds()
```

##### `ResetArchitecturalDesign` <a name="ResetArchitecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign"></a>

```go
func ResetArchitecturalDesign()
```

##### `ResetAwsRegions` <a name="ResetAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions"></a>

```go
func ResetAwsRegions()
```

##### `ResetDiscoveryConfig` <a name="ResetDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig"></a>

```go
func ResetDiscoveryConfig()
```

##### `ResetIndustry` <a name="ResetIndustry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry"></a>

```go
func ResetIndustry()
```

##### `ResetIndustryType` <a name="ResetIndustryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType"></a>

```go
func ResetIndustryType()
```

##### `ResetNonAwsRegions` <a name="ResetNonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions"></a>

```go
func ResetNonAwsRegions()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetReviewOwner` <a name="ResetReviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner"></a>

```go
func ResetReviewOwner()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

wellarchitectedworkload.WellarchitectedWorkload_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

wellarchitectedworkload.WellarchitectedWorkload_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

wellarchitectedworkload.WellarchitectedWorkload_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

wellarchitectedworkload.WellarchitectedWorkload_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WellarchitectedWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WellarchitectedWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig">DiscoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus">ImprovementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn">WorkloadArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId">WorkloadId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput">ArchitecturalDesignInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput">AwsRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput">DiscoveryConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput">IndustryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput">IndustryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput">LensesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput">NonAwsRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput">ReviewOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput">WorkloadNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign">ArchitecturalDesign</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry">Industry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType">IndustryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses">Lenses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions">NonAwsRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner">ReviewOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName">WorkloadName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiscoveryConfig`<sup>Required</sup> <a name="DiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig"></a>

```go
func DiscoveryConfig() WellarchitectedWorkloadDiscoveryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImprovementStatus`<sup>Required</sup> <a name="ImprovementStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus"></a>

```go
func ImprovementStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags"></a>

```go
func Tags() WellarchitectedWorkloadTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a>

---

##### `WorkloadArn`<sup>Required</sup> <a name="WorkloadArn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn"></a>

```go
func WorkloadArn() *string
```

- *Type:* *string

---

##### `WorkloadId`<sup>Required</sup> <a name="WorkloadId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId"></a>

```go
func WorkloadId() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArchitecturalDesignInput`<sup>Optional</sup> <a name="ArchitecturalDesignInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput"></a>

```go
func ArchitecturalDesignInput() *string
```

- *Type:* *string

---

##### `AwsRegionsInput`<sup>Optional</sup> <a name="AwsRegionsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput"></a>

```go
func AwsRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiscoveryConfigInput`<sup>Optional</sup> <a name="DiscoveryConfigInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput"></a>

```go
func DiscoveryConfigInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `IndustryInput`<sup>Optional</sup> <a name="IndustryInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput"></a>

```go
func IndustryInput() *string
```

- *Type:* *string

---

##### `IndustryTypeInput`<sup>Optional</sup> <a name="IndustryTypeInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput"></a>

```go
func IndustryTypeInput() *string
```

- *Type:* *string

---

##### `LensesInput`<sup>Optional</sup> <a name="LensesInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput"></a>

```go
func LensesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NonAwsRegionsInput`<sup>Optional</sup> <a name="NonAwsRegionsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput"></a>

```go
func NonAwsRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `ReviewOwnerInput`<sup>Optional</sup> <a name="ReviewOwnerInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput"></a>

```go
func ReviewOwnerInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadNameInput`<sup>Optional</sup> <a name="WorkloadNameInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput"></a>

```go
func WorkloadNameInput() *string
```

- *Type:* *string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `ArchitecturalDesign`<sup>Required</sup> <a name="ArchitecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign"></a>

```go
func ArchitecturalDesign() *string
```

- *Type:* *string

---

##### `AwsRegions`<sup>Required</sup> <a name="AwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions"></a>

```go
func AwsRegions() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Industry`<sup>Required</sup> <a name="Industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry"></a>

```go
func Industry() *string
```

- *Type:* *string

---

##### `IndustryType`<sup>Required</sup> <a name="IndustryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType"></a>

```go
func IndustryType() *string
```

- *Type:* *string

---

##### `Lenses`<sup>Required</sup> <a name="Lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses"></a>

```go
func Lenses() *[]*string
```

- *Type:* *[]*string

---

##### `NonAwsRegions`<sup>Required</sup> <a name="NonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions"></a>

```go
func NonAwsRegions() *[]*string
```

- *Type:* *[]*string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `ReviewOwner`<sup>Required</sup> <a name="ReviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner"></a>

```go
func ReviewOwner() *string
```

- *Type:* *string

---

##### `WorkloadName`<sup>Required</sup> <a name="WorkloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName"></a>

```go
func WorkloadName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedWorkloadConfig <a name="WellarchitectedWorkloadConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

&wellarchitectedworkload.WellarchitectedWorkloadConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Environment: *string,
	Lenses: *[]*string,
	WorkloadName: *string,
	AccountIds: *[]*string,
	ArchitecturalDesign: *string,
	AwsRegions: *[]*string,
	DiscoveryConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig,
	Industry: *string,
	IndustryType: *string,
	NonAwsRegions: *[]*string,
	Notes: *string,
	ReviewOwner: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description">Description</a></code> | <code>*string</code> | The description for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment">Environment</a></code> | <code>*string</code> | The environment for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses">Lenses</a></code> | <code>*[]*string</code> | The list of lenses associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName">WorkloadName</a></code> | <code>*string</code> | The name of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | The list of Amazon Web Services account IDs associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign">ArchitecturalDesign</a></code> | <code>*string</code> | The URL of the architectural design for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | The list of Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig">DiscoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | Discovery configuration associated to the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry">Industry</a></code> | <code>*string</code> | The industry for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType">IndustryType</a></code> | <code>*string</code> | The industry type for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions">NonAwsRegions</a></code> | <code>*[]*string</code> | The list of non-Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes">Notes</a></code> | <code>*string</code> | The notes associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner">ReviewOwner</a></code> | <code>*string</code> | The review owner of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the workload. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#description WellarchitectedWorkload#description}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The environment for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#environment WellarchitectedWorkload#environment}

---

##### `Lenses`<sup>Required</sup> <a name="Lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses"></a>

```go
Lenses *[]*string
```

- *Type:* *[]*string

The list of lenses associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#lenses WellarchitectedWorkload#lenses}

---

##### `WorkloadName`<sup>Required</sup> <a name="WorkloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName"></a>

```go
WorkloadName *string
```

- *Type:* *string

The name of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#workload_name WellarchitectedWorkload#workload_name}

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

The list of Amazon Web Services account IDs associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#account_ids WellarchitectedWorkload#account_ids}

---

##### `ArchitecturalDesign`<sup>Optional</sup> <a name="ArchitecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign"></a>

```go
ArchitecturalDesign *string
```

- *Type:* *string

The URL of the architectural design for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#architectural_design WellarchitectedWorkload#architectural_design}

---

##### `AwsRegions`<sup>Optional</sup> <a name="AwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions"></a>

```go
AwsRegions *[]*string
```

- *Type:* *[]*string

The list of Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#aws_regions WellarchitectedWorkload#aws_regions}

---

##### `DiscoveryConfig`<sup>Optional</sup> <a name="DiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig"></a>

```go
DiscoveryConfig WellarchitectedWorkloadDiscoveryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

Discovery configuration associated to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#discovery_config WellarchitectedWorkload#discovery_config}

---

##### `Industry`<sup>Optional</sup> <a name="Industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry"></a>

```go
Industry *string
```

- *Type:* *string

The industry for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#industry WellarchitectedWorkload#industry}

---

##### `IndustryType`<sup>Optional</sup> <a name="IndustryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType"></a>

```go
IndustryType *string
```

- *Type:* *string

The industry type for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#industry_type WellarchitectedWorkload#industry_type}

---

##### `NonAwsRegions`<sup>Optional</sup> <a name="NonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions"></a>

```go
NonAwsRegions *[]*string
```

- *Type:* *[]*string

The list of non-Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#non_aws_regions WellarchitectedWorkload#non_aws_regions}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

The notes associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#notes WellarchitectedWorkload#notes}

---

##### `ReviewOwner`<sup>Optional</sup> <a name="ReviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner"></a>

```go
ReviewOwner *string
```

- *Type:* *string

The review owner of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#review_owner WellarchitectedWorkload#review_owner}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#tags WellarchitectedWorkload#tags}

---

### WellarchitectedWorkloadDiscoveryConfig <a name="WellarchitectedWorkloadDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

&wellarchitectedworkload.WellarchitectedWorkloadDiscoveryConfig {
	TrustedAdvisorIntegrationStatus: *string,
	WorkloadResourceDefinition: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus">TrustedAdvisorIntegrationStatus</a></code> | <code>*string</code> | Discovery integration status in respect to Trusted Advisor for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition">WorkloadResourceDefinition</a></code> | <code>*[]*string</code> | The mode to use for identifying resources associated with the workload. |

---

##### `TrustedAdvisorIntegrationStatus`<sup>Optional</sup> <a name="TrustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus"></a>

```go
TrustedAdvisorIntegrationStatus *string
```

- *Type:* *string

Discovery integration status in respect to Trusted Advisor for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#trusted_advisor_integration_status WellarchitectedWorkload#trusted_advisor_integration_status}

---

##### `WorkloadResourceDefinition`<sup>Optional</sup> <a name="WorkloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition"></a>

```go
WorkloadResourceDefinition *[]*string
```

- *Type:* *[]*string

The mode to use for identifying resources associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#workload_resource_definition WellarchitectedWorkload#workload_resource_definition}

---

### WellarchitectedWorkloadTags <a name="WellarchitectedWorkloadTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

&wellarchitectedworkload.WellarchitectedWorkloadTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedWorkloadDiscoveryConfigOutputReference <a name="WellarchitectedWorkloadDiscoveryConfigOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

wellarchitectedworkload.NewWellarchitectedWorkloadDiscoveryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WellarchitectedWorkloadDiscoveryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus">ResetTrustedAdvisorIntegrationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition">ResetWorkloadResourceDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTrustedAdvisorIntegrationStatus` <a name="ResetTrustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus"></a>

```go
func ResetTrustedAdvisorIntegrationStatus()
```

##### `ResetWorkloadResourceDefinition` <a name="ResetWorkloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition"></a>

```go
func ResetWorkloadResourceDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput">TrustedAdvisorIntegrationStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput">WorkloadResourceDefinitionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus">TrustedAdvisorIntegrationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition">WorkloadResourceDefinition</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrustedAdvisorIntegrationStatusInput`<sup>Optional</sup> <a name="TrustedAdvisorIntegrationStatusInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput"></a>

```go
func TrustedAdvisorIntegrationStatusInput() *string
```

- *Type:* *string

---

##### `WorkloadResourceDefinitionInput`<sup>Optional</sup> <a name="WorkloadResourceDefinitionInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput"></a>

```go
func WorkloadResourceDefinitionInput() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedAdvisorIntegrationStatus`<sup>Required</sup> <a name="TrustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus"></a>

```go
func TrustedAdvisorIntegrationStatus() *string
```

- *Type:* *string

---

##### `WorkloadResourceDefinition`<sup>Required</sup> <a name="WorkloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition"></a>

```go
func WorkloadResourceDefinition() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WellarchitectedWorkloadTagsList <a name="WellarchitectedWorkloadTagsList" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

wellarchitectedworkload.NewWellarchitectedWorkloadTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WellarchitectedWorkloadTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get"></a>

```go
func Get(index *f64) WellarchitectedWorkloadTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WellarchitectedWorkloadTagsOutputReference <a name="WellarchitectedWorkloadTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedworkload"

wellarchitectedworkload.NewWellarchitectedWorkloadTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WellarchitectedWorkloadTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



