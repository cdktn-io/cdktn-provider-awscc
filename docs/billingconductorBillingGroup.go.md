# `billingconductorBillingGroup` Submodule <a name="`billingconductorBillingGroup` Submodule" id="@cdktn/provider-awscc.billingconductorBillingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorBillingGroup <a name="BillingconductorBillingGroup" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group awscc_billingconductor_billing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.NewBillingconductorBillingGroup(scope Construct, id *string, config BillingconductorBillingGroupConfig) BillingconductorBillingGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig">BillingconductorBillingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig">BillingconductorBillingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping">PutAccountGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference">PutComputationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId">ResetPrimaryAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountGrouping` <a name="PutAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping"></a>

```go
func PutAccountGrouping(value BillingconductorBillingGroupAccountGrouping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---

##### `PutComputationPreference` <a name="PutComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference"></a>

```go
func PutComputationPreference(value BillingconductorBillingGroupComputationPreference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetPrimaryAccountId` <a name="ResetPrimaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId"></a>

```go
func ResetPrimaryAccountId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.BillingconductorBillingGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.BillingconductorBillingGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.BillingconductorBillingGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.BillingconductorBillingGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BillingconductorBillingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BillingconductorBillingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorBillingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping">AccountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference">ComputationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput">AccountGroupingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput">ComputationPreferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput">PrimaryAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId">PrimaryAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountGrouping`<sup>Required</sup> <a name="AccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping"></a>

```go
func AccountGrouping() BillingconductorBillingGroupAccountGroupingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ComputationPreference`<sup>Required</sup> <a name="ComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference"></a>

```go
func ComputationPreference() BillingconductorBillingGroupComputationPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags"></a>

```go
func Tags() BillingconductorBillingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a>

---

##### `AccountGroupingInput`<sup>Optional</sup> <a name="AccountGroupingInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput"></a>

```go
func AccountGroupingInput() interface{}
```

- *Type:* interface{}

---

##### `ComputationPreferenceInput`<sup>Optional</sup> <a name="ComputationPreferenceInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput"></a>

```go
func ComputationPreferenceInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryAccountIdInput`<sup>Optional</sup> <a name="PrimaryAccountIdInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput"></a>

```go
func PrimaryAccountIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryAccountId`<sup>Required</sup> <a name="PrimaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId"></a>

```go
func PrimaryAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorBillingGroupAccountGrouping <a name="BillingconductorBillingGroupAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

&billingconductorbillinggroup.BillingconductorBillingGroupAccountGrouping {
	AutoAssociate: interface{},
	LinkedAccountIds: *[]*string,
	ResponsibilityTransferArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate">AutoAssociate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds">LinkedAccountIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn">ResponsibilityTransferArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}. |

---

##### `AutoAssociate`<sup>Optional</sup> <a name="AutoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate"></a>

```go
AutoAssociate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}.

---

##### `LinkedAccountIds`<sup>Optional</sup> <a name="LinkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds"></a>

```go
LinkedAccountIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}.

---

##### `ResponsibilityTransferArn`<sup>Optional</sup> <a name="ResponsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn"></a>

```go
ResponsibilityTransferArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}.

---

### BillingconductorBillingGroupComputationPreference <a name="BillingconductorBillingGroupComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

&billingconductorbillinggroup.BillingconductorBillingGroupComputationPreference {
	PricingPlanArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn">PricingPlanArn</a></code> | <code>*string</code> | ARN of the attached pricing plan. |

---

##### `PricingPlanArn`<sup>Required</sup> <a name="PricingPlanArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn"></a>

```go
PricingPlanArn *string
```

- *Type:* *string

ARN of the attached pricing plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#pricing_plan_arn BillingconductorBillingGroup#pricing_plan_arn}

---

### BillingconductorBillingGroupConfig <a name="BillingconductorBillingGroupConfig" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

&billingconductorbillinggroup.BillingconductorBillingGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountGrouping: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping,
	ComputationPreference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference,
	Name: *string,
	Description: *string,
	PrimaryAccountId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping">AccountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference">ComputationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId">PrimaryAccountId</a></code> | <code>*string</code> | This account will act as a virtual payer account of the billing group. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountGrouping`<sup>Required</sup> <a name="AccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping"></a>

```go
AccountGrouping BillingconductorBillingGroupAccountGrouping
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}.

---

##### `ComputationPreference`<sup>Required</sup> <a name="ComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference"></a>

```go
ComputationPreference BillingconductorBillingGroupComputationPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}.

---

##### `PrimaryAccountId`<sup>Optional</sup> <a name="PrimaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId"></a>

```go
PrimaryAccountId *string
```

- *Type:* *string

This account will act as a virtual payer account of the billing group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#primary_account_id BillingconductorBillingGroup#primary_account_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}.

---

### BillingconductorBillingGroupTags <a name="BillingconductorBillingGroupTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

&billingconductorbillinggroup.BillingconductorBillingGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorBillingGroupAccountGroupingOutputReference <a name="BillingconductorBillingGroupAccountGroupingOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.NewBillingconductorBillingGroupAccountGroupingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorBillingGroupAccountGroupingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate">ResetAutoAssociate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds">ResetLinkedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn">ResetResponsibilityTransferArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoAssociate` <a name="ResetAutoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate"></a>

```go
func ResetAutoAssociate()
```

##### `ResetLinkedAccountIds` <a name="ResetLinkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds"></a>

```go
func ResetLinkedAccountIds()
```

##### `ResetResponsibilityTransferArn` <a name="ResetResponsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn"></a>

```go
func ResetResponsibilityTransferArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput">AutoAssociateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput">LinkedAccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput">ResponsibilityTransferArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate">AutoAssociate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds">LinkedAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn">ResponsibilityTransferArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoAssociateInput`<sup>Optional</sup> <a name="AutoAssociateInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput"></a>

```go
func AutoAssociateInput() interface{}
```

- *Type:* interface{}

---

##### `LinkedAccountIdsInput`<sup>Optional</sup> <a name="LinkedAccountIdsInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput"></a>

```go
func LinkedAccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponsibilityTransferArnInput`<sup>Optional</sup> <a name="ResponsibilityTransferArnInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput"></a>

```go
func ResponsibilityTransferArnInput() *string
```

- *Type:* *string

---

##### `AutoAssociate`<sup>Required</sup> <a name="AutoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate"></a>

```go
func AutoAssociate() interface{}
```

- *Type:* interface{}

---

##### `LinkedAccountIds`<sup>Required</sup> <a name="LinkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds"></a>

```go
func LinkedAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResponsibilityTransferArn`<sup>Required</sup> <a name="ResponsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn"></a>

```go
func ResponsibilityTransferArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorBillingGroupComputationPreferenceOutputReference <a name="BillingconductorBillingGroupComputationPreferenceOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.NewBillingconductorBillingGroupComputationPreferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorBillingGroupComputationPreferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput">PricingPlanArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn">PricingPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PricingPlanArnInput`<sup>Optional</sup> <a name="PricingPlanArnInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput"></a>

```go
func PricingPlanArnInput() *string
```

- *Type:* *string

---

##### `PricingPlanArn`<sup>Required</sup> <a name="PricingPlanArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn"></a>

```go
func PricingPlanArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorBillingGroupTagsList <a name="BillingconductorBillingGroupTagsList" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.NewBillingconductorBillingGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BillingconductorBillingGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get"></a>

```go
func Get(index *f64) BillingconductorBillingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorBillingGroupTagsOutputReference <a name="BillingconductorBillingGroupTagsOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorbillinggroup"

billingconductorbillinggroup.NewBillingconductorBillingGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BillingconductorBillingGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



