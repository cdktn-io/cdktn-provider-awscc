# `guarddutyTrustedEntitySet` Submodule <a name="`guarddutyTrustedEntitySet` Submodule" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyTrustedEntitySet <a name="GuarddutyTrustedEntitySet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set awscc_guardduty_trusted_entity_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

guarddutytrustedentityset.NewGuarddutyTrustedEntitySet(scope Construct, id *string, config GuarddutyTrustedEntitySetConfig) GuarddutyTrustedEntitySet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig">GuarddutyTrustedEntitySetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig">GuarddutyTrustedEntitySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetActivate">ResetActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetDetectorId">ResetDetectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActivate` <a name="ResetActivate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetActivate"></a>

```go
func ResetActivate()
```

##### `ResetDetectorId` <a name="ResetDetectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetDetectorId"></a>

```go
func ResetDetectorId()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyTrustedEntitySet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

guarddutytrustedentityset.GuarddutyTrustedEntitySet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

guarddutytrustedentityset.GuarddutyTrustedEntitySet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

guarddutytrustedentityset.GuarddutyTrustedEntitySet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

guarddutytrustedentityset.GuarddutyTrustedEntitySet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GuarddutyTrustedEntitySet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GuarddutyTrustedEntitySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GuarddutyTrustedEntitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyTrustedEntitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.errorDetails">ErrorDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList">GuarddutyTrustedEntitySetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.trustedEntitySetId">TrustedEntitySetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activateInput">ActivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorIdInput">DetectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activate">Activate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorId">DetectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.errorDetails"></a>

```go
func ErrorDetails() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tags"></a>

```go
func Tags() GuarddutyTrustedEntitySetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList">GuarddutyTrustedEntitySetTagsList</a>

---

##### `TrustedEntitySetId`<sup>Required</sup> <a name="TrustedEntitySetId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.trustedEntitySetId"></a>

```go
func TrustedEntitySetId() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ActivateInput`<sup>Optional</sup> <a name="ActivateInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activateInput"></a>

```go
func ActivateInput() interface{}
```

- *Type:* interface{}

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorIdInput"></a>

```go
func DetectorIdInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Activate`<sup>Required</sup> <a name="Activate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activate"></a>

```go
func Activate() interface{}
```

- *Type:* interface{}

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorId"></a>

```go
func DetectorId() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyTrustedEntitySetConfig <a name="GuarddutyTrustedEntitySetConfig" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

&guarddutytrustedentityset.GuarddutyTrustedEntitySetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Format: *string,
	Location: *string,
	Activate: interface{},
	DetectorId: *string,
	ExpectedBucketOwner: *string,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#format GuarddutyTrustedEntitySet#format}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#location GuarddutyTrustedEntitySet#location}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.activate">Activate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#activate GuarddutyTrustedEntitySet#activate}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.detectorId">DetectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#detector_id GuarddutyTrustedEntitySet#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#expected_bucket_owner GuarddutyTrustedEntitySet#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#name GuarddutyTrustedEntitySet#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#tags GuarddutyTrustedEntitySet#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#format GuarddutyTrustedEntitySet#format}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#location GuarddutyTrustedEntitySet#location}.

---

##### `Activate`<sup>Optional</sup> <a name="Activate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.activate"></a>

```go
Activate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#activate GuarddutyTrustedEntitySet#activate}.

---

##### `DetectorId`<sup>Optional</sup> <a name="DetectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.detectorId"></a>

```go
DetectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#detector_id GuarddutyTrustedEntitySet#detector_id}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#expected_bucket_owner GuarddutyTrustedEntitySet#expected_bucket_owner}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#name GuarddutyTrustedEntitySet#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#tags GuarddutyTrustedEntitySet#tags}.

---

### GuarddutyTrustedEntitySetTags <a name="GuarddutyTrustedEntitySetTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

&guarddutytrustedentityset.GuarddutyTrustedEntitySetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#key GuarddutyTrustedEntitySet#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#value GuarddutyTrustedEntitySet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#key GuarddutyTrustedEntitySet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/guardduty_trusted_entity_set#value GuarddutyTrustedEntitySet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyTrustedEntitySetTagsList <a name="GuarddutyTrustedEntitySetTagsList" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

guarddutytrustedentityset.NewGuarddutyTrustedEntitySetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GuarddutyTrustedEntitySetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get"></a>

```go
func Get(index *f64) GuarddutyTrustedEntitySetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GuarddutyTrustedEntitySetTagsOutputReference <a name="GuarddutyTrustedEntitySetTagsOutputReference" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/guarddutytrustedentityset"

guarddutytrustedentityset.NewGuarddutyTrustedEntitySetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GuarddutyTrustedEntitySetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



